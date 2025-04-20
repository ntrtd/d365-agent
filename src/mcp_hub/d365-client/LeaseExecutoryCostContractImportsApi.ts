/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseExecutoryCostContractImports } from './LeaseExecutoryCostContractImports';
import { LeaseExecutoryCostContractImportsRequestBuilder } from './LeaseExecutoryCostContractImportsRequestBuilder';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseAcType } from './AssetLeaseAcType';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
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
export class LeaseExecutoryCostContractImportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseExecutoryCostContractImports<DeSerializersT>, DeSerializersT>
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
  ): LeaseExecutoryCostContractImportsApi<DeSerializersT> {
    return new LeaseExecutoryCostContractImportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseExecutoryCostContractImports;

  requestBuilder(): LeaseExecutoryCostContractImportsRequestBuilder<DeSerializersT> {
    return new LeaseExecutoryCostContractImportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeaseExecutoryCostContractImports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseExecutoryCostContractImports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseExecutoryCostContractImports<DeSerializersT>,
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
    typeof LeaseExecutoryCostContractImports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseExecutoryCostContractImports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEASE_ID: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORT_ID: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPENSE_TYPE: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTERVAL: EnumField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseTermInterval,
      true,
      true
    >;
    ANNUITY_TYPE: EnumField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    LEASE_AC_TYPE: EnumField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseAcType,
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_DISPLAY: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODS: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FREQUENCY: EnumField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentFrequency,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LeaseExecutoryCostContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseAcType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseExecutoryCostContractImports<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link importId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'ImportId',
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
         * Static representation of the {@link leaseCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_COUNTER: fieldBuilder.buildEdmTypeField(
          'LeaseCounter',
          'Edm.Int32',
          false
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
         * Static representation of the {@link annuityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUITY_TYPE: fieldBuilder.buildEnumField(
          'AnnuityType',
          AssetLeaseAnnuityType,
          true
        ),
        /**
         * Static representation of the {@link leaseAcType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_AC_TYPE: fieldBuilder.buildEnumField(
          'LeaseACType',
          AssetLeaseAcType,
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_DISPLAY: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionDisplay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS: fieldBuilder.buildEdmTypeField('Periods', 'Edm.Int32', false),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          AssetLeasePaymentFrequency,
          true
        ),
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
          AssetLeaseAcType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseExecutoryCostContractImports)
      };
    }

    return this._schema;
  }
}
