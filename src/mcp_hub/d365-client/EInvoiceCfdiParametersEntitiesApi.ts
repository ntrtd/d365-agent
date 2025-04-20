/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EInvoiceCfdiParametersEntities } from './EInvoiceCfdiParametersEntities';
import { EInvoiceCfdiParametersEntitiesRequestBuilder } from './EInvoiceCfdiParametersEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { CfdDigestAlgorithmMx } from './CfdDigestAlgorithmMx';
import { EInvoiceCfdiEnvironmentMx } from './EInvoiceCfdiEnvironmentMx';
import { EInvoiceCfdiVersionMx } from './EInvoiceCfdiVersionMx';
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
export class EInvoiceCfdiParametersEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EInvoiceCfdiParametersEntities<DeSerializersT>, DeSerializersT>
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
  ): EInvoiceCfdiParametersEntitiesApi<DeSerializersT> {
    return new EInvoiceCfdiParametersEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EInvoiceCfdiParametersEntities;

  requestBuilder(): EInvoiceCfdiParametersEntitiesRequestBuilder<DeSerializersT> {
    return new EInvoiceCfdiParametersEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EInvoiceCfdiParametersEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EInvoiceCfdiParametersEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EInvoiceCfdiParametersEntities<DeSerializersT>,
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
    typeof EInvoiceCfdiParametersEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EInvoiceCfdiParametersEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_EXCLUDE_CUST_ORDERS_FROM_CFDI_GLOBAL: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEND_REPORT_FILE: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_ID: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDI_DIGEST_ALGORITHM: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      CfdDigestAlgorithmMx,
      true,
      true
    >;
    CFDI_ENVIRONMENT: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      EInvoiceCfdiEnvironmentMx,
      true,
      true
    >;
    RETAIL_INVOICE_RFC: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_RECALCULATE_ROUNDING_OF_TAX_BASE_AMOUNT: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_ITEM_DESCRIPTION: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_UNIT_CODE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_ENABLE_RELATED_CFDI_IN_RETURNS: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CFDI_VERSION: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      EInvoiceCfdiVersionMx,
      true,
      true
    >;
    RETAIL_PAYM_METHOD: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLED_CFDI: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_PRODUCT_CODE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDIXML_SCHEMA_FILE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEND_BY_MAIL: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_TAX_AMOUNT_PER_LINES: EnumField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_PURPOSE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDIPAC_CERTIFICATE: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAC_ACCOUNT_ID: OrderableEdmTypeField<
      EInvoiceCfdiParametersEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EInvoiceCfdiParametersEntities<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link retailExcludeCustOrdersFromCfdiGlobal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_EXCLUDE_CUST_ORDERS_FROM_CFDI_GLOBAL:
          fieldBuilder.buildEnumField(
            'RetailExcludeCustOrdersFromCFDIGlobal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sendReportFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_REPORT_FILE: fieldBuilder.buildEnumField(
          'SendReportFile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ID: fieldBuilder.buildEdmTypeField('EmailId', 'Edm.String', true),
        /**
         * Static representation of the {@link cfdiDigestAlgorithm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_DIGEST_ALGORITHM: fieldBuilder.buildEnumField(
          'CFDIDigestAlgorithm',
          CfdDigestAlgorithmMx,
          true
        ),
        /**
         * Static representation of the {@link cfdiEnvironment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_ENVIRONMENT: fieldBuilder.buildEnumField(
          'CFDIEnvironment',
          EInvoiceCfdiEnvironmentMx,
          true
        ),
        /**
         * Static representation of the {@link retailInvoiceRfc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INVOICE_RFC: fieldBuilder.buildEdmTypeField(
          'RetailInvoiceRFC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'Certificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailRecalculateRoundingOfTaxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RECALCULATE_ROUNDING_OF_TAX_BASE_AMOUNT:
          fieldBuilder.buildEnumField(
            'RetailRecalculateRoundingOfTaxBaseAmount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link retailItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RetailItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailUnitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_UNIT_CODE: fieldBuilder.buildEdmTypeField(
          'RetailUnitCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailEnableRelatedCfdiInReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ENABLE_RELATED_CFDI_IN_RETURNS: fieldBuilder.buildEnumField(
          'RetailEnableRelatedCFDIInReturns',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cfdiVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDI_VERSION: fieldBuilder.buildEnumField(
          'CFDIVersion',
          EInvoiceCfdiVersionMx,
          true
        ),
        /**
         * Static representation of the {@link retailPaymMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PAYM_METHOD: fieldBuilder.buildEdmTypeField(
          'RetailPaymMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enabledCfdi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED_CFDI: fieldBuilder.buildEnumField('EnabledCFDI', NoYes, true),
        /**
         * Static representation of the {@link retailProductCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_CODE: fieldBuilder.buildEdmTypeField(
          'RetailProductCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfdixmlSchemaFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDIXML_SCHEMA_FILE: fieldBuilder.buildEdmTypeField(
          'CFDIXMLSchemaFile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sendByMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_BY_MAIL: fieldBuilder.buildEnumField('SendByMail', NoYes, true),
        /**
         * Static representation of the {@link splitTaxAmountPerLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_TAX_AMOUNT_PER_LINES: fieldBuilder.buildEnumField(
          'SplitTaxAmountPerLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'RetailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfdipacCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDIPAC_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'CFDIPACCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pacAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAC_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'PACAccountId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EInvoiceCfdiParametersEntities)
      };
    }

    return this._schema;
  }
}
