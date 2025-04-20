/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTableRuBiEntities } from './SalesTableRuBiEntities';
import { SalesTableRuBiEntitiesRequestBuilder } from './SalesTableRuBiEntitiesRequestBuilder';
import { SalesInvoicePostingTypeRu } from './SalesInvoicePostingTypeRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SalesTableRuBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTableRuBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesTableRuBiEntitiesApi<DeSerializersT> {
    return new SalesTableRuBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTableRuBiEntities;

  requestBuilder(): SalesTableRuBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesTableRuBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTableRuBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesTableRuBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTableRuBiEntities<DeSerializersT>,
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
    typeof SalesTableRuBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTableRuBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_AGREEMENT_DATE_RU: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNEE_ACCOUNT_RU: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNOR_ACCOUNT_RU: OrderableEdmTypeField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_POSTING_TYPE_RU: EnumField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      SalesInvoicePostingTypeRu,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    INVENT_PROFILE_USE_RELATED_RU: EnumField<
      SalesTableRuBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesTableRuBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link priceAgreementDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_AGREEMENT_DATE_RU: fieldBuilder.buildEdmTypeField(
          'PriceAgreementDate_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consigneeAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignorAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNOR_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ConsignorAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicePostingTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_POSTING_TYPE_RU: fieldBuilder.buildEnumField(
          'InvoicePostingType_RU',
          SalesInvoicePostingTypeRu,
          true
        ),
        /**
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link inventProfileUseRelatedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_USE_RELATED_RU: fieldBuilder.buildEnumField(
          'InventProfileUseRelated_RU',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTableRuBiEntities)
      };
    }

    return this._schema;
  }
}
