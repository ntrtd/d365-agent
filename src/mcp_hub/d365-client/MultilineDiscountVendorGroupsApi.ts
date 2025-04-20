/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultilineDiscountVendorGroups } from './MultilineDiscountVendorGroups';
import { MultilineDiscountVendorGroupsRequestBuilder } from './MultilineDiscountVendorGroupsRequestBuilder';
import { OpenPurchaseMultiLineDiscountJournalLinesApi } from './OpenPurchaseMultiLineDiscountJournalLinesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class MultilineDiscountVendorGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MultilineDiscountVendorGroups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MultilineDiscountVendorGroupsApi<DeSerializersT> {
    return new MultilineDiscountVendorGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseMultiLineDiscountJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MultilineDiscountVendorGroups;

  requestBuilder(): MultilineDiscountVendorGroupsRequestBuilder<DeSerializersT> {
    return new MultilineDiscountVendorGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MultilineDiscountVendorGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MultilineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MultilineDiscountVendorGroups<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MultilineDiscountVendorGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MultilineDiscountVendorGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MultilineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      MultilineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      MultilineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MultilineDiscountVendorGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MultilineDiscountVendorGroups)
      };
    }

    return this._schema;
  }
}
