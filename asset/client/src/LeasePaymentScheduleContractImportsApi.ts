/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePaymentScheduleContractImports } from './LeasePaymentScheduleContractImports';
import { LeasePaymentScheduleContractImportsRequestBuilder } from './LeasePaymentScheduleContractImportsRequestBuilder';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';
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
export class LeasePaymentScheduleContractImportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LeasePaymentScheduleContractImports<DeSerializersT>,
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
  ): LeasePaymentScheduleContractImportsApi<DeSerializersT> {
    return new LeasePaymentScheduleContractImportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeasePaymentScheduleContractImports;

  requestBuilder(): LeasePaymentScheduleContractImportsRequestBuilder<DeSerializersT> {
    return new LeasePaymentScheduleContractImportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeasePaymentScheduleContractImports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeasePaymentScheduleContractImports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePaymentScheduleContractImports<DeSerializersT>,
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
    typeof LeasePaymentScheduleContractImports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePaymentScheduleContractImports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEASE_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IMPORT_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_PER_UNIT: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TERM: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORD_CREATED_BY: EnumField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseCreatedBy,
      true,
      true
    >;
    INTERVAL: EnumField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseTermInterval,
      true,
      true
    >;
    INDEX_TYPE: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODS: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCERCISE: EnumField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    FREQUENCY: EnumField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentFrequency,
      true,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContractImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeasePaymentScheduleContractImports<DeSerializers>>;
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link costPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'CostPerUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
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
         * Static representation of the {@link term} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERM: fieldBuilder.buildEdmTypeField('Term', 'Edm.String', true),
        /**
         * Static representation of the {@link recordCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_CREATED_BY: fieldBuilder.buildEnumField(
          'RecordCreatedBy',
          AssetLeaseCreatedBy,
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
         * Static representation of the {@link indexType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_TYPE: fieldBuilder.buildEdmTypeField(
          'IndexType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODS: fieldBuilder.buildEdmTypeField('Periods', 'Edm.Int32', false),
        /**
         * Static representation of the {@link excercise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCERCISE: fieldBuilder.buildEnumField('Excercise', NoYesCombo, true),
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
         * Static representation of the {@link variablePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'VariablePayment',
          'Edm.Decimal',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePaymentScheduleContractImports)
      };
    }

    return this._schema;
  }
}
