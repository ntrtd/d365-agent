/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceInfoLine_ProjectBiEntities } from './VendInvoiceInfoLine_ProjectBiEntities';
import { VendInvoiceInfoLine_ProjectBiEntitiesRequestBuilder } from './VendInvoiceInfoLine_ProjectBiEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class VendInvoiceInfoLine_ProjectBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): VendInvoiceInfoLine_ProjectBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceInfoLine_ProjectBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceInfoLine_ProjectBiEntities;

  requestBuilder(): VendInvoiceInfoLine_ProjectBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceInfoLine_ProjectBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceInfoLine_ProjectBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceInfoLine_ProjectBiEntities<DeSerializersT>,
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
    typeof VendInvoiceInfoLine_ProjectBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceInfoLine_ProjectBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_INVOICE_INFO_LINE_REF_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_TAX_GROUP_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSFER_CURRENCY: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_SALES_CURRENCY_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_PRICE: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_SALES_UNIT_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTERCOMPANY_BILLED: OrderableEdmTypeField<
      VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceInfoLine_ProjectBiEntities<DeSerializers>>;
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
         * Static representation of the {@link vendInvoiceInfoLineRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_INFO_LINE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'VendInvoiceInfoLineRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', true),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ProjDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link projActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transferCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransferCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projSalesCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'ProjSalesCurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_PRICE: fieldBuilder.buildEdmTypeField(
          'TransferPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projSalesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProjSalesUnitId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link intercompanyBilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_BILLED: fieldBuilder.buildEdmTypeField(
          'IntercompanyBilled',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceInfoLine_ProjectBiEntities)
      };
    }

    return this._schema;
  }
}
