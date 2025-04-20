/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePaymentScheduleContracts } from './LeasePaymentScheduleContracts';
import { LeasePaymentScheduleContractsRequestBuilder } from './LeasePaymentScheduleContractsRequestBuilder';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';
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
export class LeasePaymentScheduleContractsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeasePaymentScheduleContracts<DeSerializersT>, DeSerializersT>
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
  ): LeasePaymentScheduleContractsApi<DeSerializersT> {
    return new LeasePaymentScheduleContractsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeasePaymentScheduleContracts;

  requestBuilder(): LeasePaymentScheduleContractsRequestBuilder<DeSerializersT> {
    return new LeasePaymentScheduleContractsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeasePaymentScheduleContracts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeasePaymentScheduleContracts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePaymentScheduleContracts<DeSerializersT>,
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
    typeof LeasePaymentScheduleContracts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePaymentScheduleContracts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_PER_UNIT: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_FREQUENCY: EnumField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      AssetLeasePaymentFrequency,
      true,
      true
    >;
    TERM: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORD_CREATED_BY: EnumField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      AssetLeaseCreatedBy,
      true,
      true
    >;
    INTERVAL: EnumField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseTermInterval,
      true,
      true
    >;
    INDEX_TYPE: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXERCISE: EnumField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    PERIODS: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      LeasePaymentScheduleContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeasePaymentScheduleContracts<DeSerializers>>;
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
         * Static representation of the {@link paymentFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FREQUENCY: fieldBuilder.buildEnumField(
          'PaymentFrequency',
          AssetLeasePaymentFrequency,
          true
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link exercise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXERCISE: fieldBuilder.buildEnumField('Exercise', NoYesCombo, true),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePaymentScheduleContracts)
      };
    }

    return this._schema;
  }
}
