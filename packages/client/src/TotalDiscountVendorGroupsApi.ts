/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TotalDiscountVendorGroups } from './TotalDiscountVendorGroups';
import { TotalDiscountVendorGroupsRequestBuilder } from './TotalDiscountVendorGroupsRequestBuilder';
import { OpenPurchaseTotalDiscountJournalLinesApi } from './OpenPurchaseTotalDiscountJournalLinesApi';
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
export class TotalDiscountVendorGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TotalDiscountVendorGroups<DeSerializersT>, DeSerializersT>
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
  ): TotalDiscountVendorGroupsApi<DeSerializersT> {
    return new TotalDiscountVendorGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      TotalDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseTotalDiscountJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TotalDiscountVendorGroups;

  requestBuilder(): TotalDiscountVendorGroupsRequestBuilder<DeSerializersT> {
    return new TotalDiscountVendorGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TotalDiscountVendorGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TotalDiscountVendorGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TotalDiscountVendorGroups<DeSerializersT>,
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
    typeof TotalDiscountVendorGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TotalDiscountVendorGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TotalDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      TotalDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      TotalDiscountVendorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseTotalDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_TOTAL_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      TotalDiscountVendorGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseTotalDiscountJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TotalDiscountVendorGroups<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', TotalDiscountVendorGroups)
      };
    }

    return this._schema;
  }
}
