/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrvRequisitionLineBiEntities } from './TrvRequisitionLineBiEntities';
import { TrvRequisitionLineBiEntitiesRequestBuilder } from './TrvRequisitionLineBiEntitiesRequestBuilder';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import { TrvRequisitionReconciliationStatus } from './TrvRequisitionReconciliationStatus';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';
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
export class TrvRequisitionLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TrvRequisitionLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TrvRequisitionLineBiEntitiesApi<DeSerializersT> {
    return new TrvRequisitionLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrvRequisitionLineBiEntities;

  requestBuilder(): TrvRequisitionLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new TrvRequisitionLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrvRequisitionLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrvRequisitionLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrvRequisitionLineBiEntities<DeSerializersT>,
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
    typeof TrvRequisitionLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrvRequisitionLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRV_LOCATIONS: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_POLICY_STATUS: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyStatus,
      true,
      true
    >;
    PERDIEM_DATE_FROM: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAR_RENTAL_VEHICLE_CLASS: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      TrvCarRentalVehicleClassEnum,
      true,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANT: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRV_REQUISITION_TABLE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MILEAGE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_DATE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERDIEM_DATE_TO: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILEAGE_RATE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECONCILIATION_STATUS: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      TrvRequisitionReconciliationStatus,
      true,
      true
    >;
    TRANSACTION_CURRENCY_CODE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BUDGET_CHECK_PENDING: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_POLICY_TEXT: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TYPE: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    AIRLINE_SERVICE_CLASS: EnumField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      TrvAirlineServiceClassEnum,
      true,
      true
    >;
    PROJ_TABLE: OrderableEdmTypeField<
      TrvRequisitionLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TrvRequisitionLineBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link trvLocations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_LOCATIONS: fieldBuilder.buildEdmTypeField(
          'TrvLocations',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projPolicyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_POLICY_STATUS: fieldBuilder.buildEnumField(
          'ProjPolicyStatus',
          ProjExpPolicyStatus,
          true
        ),
        /**
         * Static representation of the {@link perdiemDateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERDIEM_DATE_FROM: fieldBuilder.buildEdmTypeField(
          'PerdiemDateFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link carRentalVehicleClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAR_RENTAL_VEHICLE_CLASS: fieldBuilder.buildEnumField(
          'CarRentalVehicleClass',
          TrvCarRentalVehicleClassEnum,
          true
        ),
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
         * Static representation of the {@link merchant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT: fieldBuilder.buildEdmTypeField(
          'Merchant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trvRequisitionTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRV_REQUISITION_TABLE: fieldBuilder.buildEdmTypeField(
          'TrvRequisitionTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE: fieldBuilder.buildEdmTypeField(
          'Mileage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link perdiemDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERDIEM_DATE_TO: fieldBuilder.buildEdmTypeField(
          'PerdiemDateTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mileageRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_RATE: fieldBuilder.buildEdmTypeField(
          'MileageRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reconciliationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILIATION_STATUS: fieldBuilder.buildEnumField(
          'ReconciliationStatus',
          TrvRequisitionReconciliationStatus,
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link isBudgetCheckPending} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CHECK_PENDING: fieldBuilder.buildEnumField(
          'IsBudgetCheckPending',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projPolicyText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_POLICY_TEXT: fieldBuilder.buildEdmTypeField(
          'ProjPolicyText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TYPE: fieldBuilder.buildEnumField('ExpType', TrvExpType, true),
        /**
         * Static representation of the {@link airlineServiceClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AIRLINE_SERVICE_CLASS: fieldBuilder.buildEnumField(
          'AirlineServiceClass',
          TrvAirlineServiceClassEnum,
          true
        ),
        /**
         * Static representation of the {@link projTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TABLE: fieldBuilder.buildEdmTypeField(
          'ProjTable',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrvRequisitionLineBiEntities)
      };
    }

    return this._schema;
  }
}
