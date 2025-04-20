/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxDeclarationLogs } from './TaxDeclarationLogs';
import { TaxDeclarationLogsRequestBuilder } from './TaxDeclarationLogsRequestBuilder';
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
export class TaxDeclarationLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxDeclarationLogs<DeSerializersT>, DeSerializersT>
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
  ): TaxDeclarationLogsApi<DeSerializersT> {
    return new TaxDeclarationLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxDeclarationLogs;

  requestBuilder(): TaxDeclarationLogsRequestBuilder<DeSerializersT> {
    return new TaxDeclarationLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxDeclarationLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxDeclarationLogs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxDeclarationLogs<DeSerializersT>,
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
    typeof TaxDeclarationLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxDeclarationLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_VALUE: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_YEAR: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXECUTION_DATE: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENT: EnumField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_TAX_DOCUMENT: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENTS_SUBMITTED_SEPARATELY: EnumField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTED_DECLARATION: EnumField<
      TaxDeclarationLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxDeclarationLogs<DeSerializers>>;
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
         * Static representation of the {@link periodValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_VALUE: fieldBuilder.buildEdmTypeField(
          'PeriodValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_YEAR: fieldBuilder.buildEdmTypeField(
          'PeriodYear',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link executionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_DATE: fieldBuilder.buildEdmTypeField(
          'ExecutionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENT: fieldBuilder.buildEnumField('Sent', NoYes, true),
        /**
         * Static representation of the {@link electronicTaxDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_TAX_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ElectronicTaxDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', NoYes, true),
        /**
         * Static representation of the {@link documentsSubmittedSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENTS_SUBMITTED_SEPARATELY: fieldBuilder.buildEnumField(
          'DocumentsSubmittedSeparately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link correctedDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_DECLARATION: fieldBuilder.buildEnumField(
          'CorrectedDeclaration',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxDeclarationLogs)
      };
    }

    return this._schema;
  }
}
