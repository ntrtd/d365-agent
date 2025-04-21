/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransThBiEntities } from './TaxTransThBiEntities';
import { TaxTransThBiEntitiesRequestBuilder } from './TaxTransThBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { TaxTypeTh } from './TaxTypeTh';
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
export class TaxTransThBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransThBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransThBiEntitiesApi<DeSerializersT> {
    return new TaxTransThBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransThBiEntities;

  requestBuilder(): TaxTransThBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransThBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransThBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransThBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransThBiEntities<DeSerializersT>,
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
    typeof TaxTransThBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransThBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_INVOICE_ID: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_RECEIPT_DATE: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_BRANCH: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVERSAL_GAIN_LOSS: EnumField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_INVOICE_DATE: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeTh,
      true,
      true
    >;
    PAYM_TAX_CODE: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REAL_VEND_NAME: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_RECEIPT_DATE: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCLUDE_FROM_REPORTS: EnumField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_UNREALIZED_REF_REC_ID: OrderableEdmTypeField<
      TaxTransThBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransThBiEntities<DeSerializers>>;
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
         * Static representation of the {@link taxInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BRANCH: fieldBuilder.buildEdmTypeField(
          'TaxBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReversalGainLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSAL_GAIN_LOSS: fieldBuilder.buildEnumField(
          'IsReversalGainLoss',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeTh, true),
        /**
         * Static representation of the {@link paymTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'PaymTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link realVendName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REAL_VEND_NAME: fieldBuilder.buildEdmTypeField(
          'RealVendName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link excludeFromReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_REPORTS: fieldBuilder.buildEnumField(
          'ExcludeFromReports',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxUnrealizedRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNREALIZED_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'TaxUnrealizedRefRecId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransThBiEntities)
      };
    }

    return this._schema;
  }
}
