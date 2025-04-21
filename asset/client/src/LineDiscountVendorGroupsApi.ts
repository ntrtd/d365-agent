/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineDiscountVendorGroups } from './LineDiscountVendorGroups';
import { LineDiscountVendorGroupsRequestBuilder } from './LineDiscountVendorGroupsRequestBuilder';
import { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
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
export class LineDiscountVendorGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LineDiscountVendorGroups<DeSerializersT>, DeSerializersT>
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
  ): LineDiscountVendorGroupsApi<DeSerializersT> {
    return new LineDiscountVendorGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseLineDiscountJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = LineDiscountVendorGroups;

  requestBuilder(): LineDiscountVendorGroupsRequestBuilder<DeSerializersT> {
    return new LineDiscountVendorGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LineDiscountVendorGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LineDiscountVendorGroups<DeSerializersT>,
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
    typeof LineDiscountVendorGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LineDiscountVendorGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      LineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      LineDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LineDiscountVendorGroups<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', LineDiscountVendorGroups)
      };
    }

    return this._schema;
  }
}
