/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseExecutoryCostContracts } from './LeaseExecutoryCostContracts';
import { LeaseExecutoryCostContractsRequestBuilder } from './LeaseExecutoryCostContractsRequestBuilder';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
export class LeaseExecutoryCostContractsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseExecutoryCostContracts<DeSerializersT>, DeSerializersT>
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
  ): LeaseExecutoryCostContractsApi<DeSerializersT> {
    return new LeaseExecutoryCostContractsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseExecutoryCostContracts;

  requestBuilder(): LeaseExecutoryCostContractsRequestBuilder<DeSerializersT> {
    return new LeaseExecutoryCostContractsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseExecutoryCostContracts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseExecutoryCostContracts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseExecutoryCostContracts<DeSerializersT>,
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
    typeof LeaseExecutoryCostContracts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseExecutoryCostContracts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPENSE_TYPE: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_FREQUENCY: EnumField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentFrequency,
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERVAL: EnumField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseTermInterval,
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUITY_TYPE: EnumField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    PERIODS: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LeaseExecutoryCostContracts<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseExecutoryCostContracts<DeSerializers>>;
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
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExpenseType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FREQUENCY: fieldBuilder.buildEnumField(
          'PaymentFrequency',
          AssetLeasePaymentFrequency,
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEnumField(
          'Interval',
          AssetLeaseLeaseTermInterval,
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link annuityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUITY_TYPE: fieldBuilder.buildEnumField(
          'AnnuityType',
          AssetLeaseAnnuityType,
          true
        ),
        /**
         * Static representation of the {@link periods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS: fieldBuilder.buildEdmTypeField('Periods', 'Edm.Int32', false),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseExecutoryCostContracts)
      };
    }

    return this._schema;
  }
}
