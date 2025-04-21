/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeasePaymentScheduleLineBiEntities } from './AssetLeasePaymentScheduleLineBiEntities';
import { AssetLeasePaymentScheduleLineBiEntitiesRequestBuilder } from './AssetLeasePaymentScheduleLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
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
export class AssetLeasePaymentScheduleLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializersT>,
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
  ): AssetLeasePaymentScheduleLineBiEntitiesApi<DeSerializersT> {
    return new AssetLeasePaymentScheduleLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeasePaymentScheduleLineBiEntities;

  requestBuilder(): AssetLeasePaymentScheduleLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeasePaymentScheduleLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeasePaymentScheduleLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeasePaymentScheduleLineBiEntities<DeSerializersT>,
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
    typeof AssetLeasePaymentScheduleLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeasePaymentScheduleLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VARIABLE_PAYMENT: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED: EnumField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LATEST_JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_LINE_DATE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRESENT_VALUE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_CREATED: EnumField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFERRED_RENT_CHARGE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STRAIGHT_LINE_COST: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_RENT_BALANCE: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BALLOON_PAYMENT: EnumField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeasePaymentScheduleLineBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('Counter', 'Edm.Int32', false),
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
         * Static representation of the {@link reversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED: fieldBuilder.buildEnumField('Reversed', NoYes, true),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link latestJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'LatestJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_POSTED: fieldBuilder.buildEnumField(
          'JournalPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleLineDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleLineDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link presentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE: fieldBuilder.buildEdmTypeField(
          'PresentValue',
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
         * Static representation of the {@link journalCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CREATED: fieldBuilder.buildEnumField(
          'JournalCreated',
          NoYes,
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
         * Static representation of the {@link deferredRentCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_RENT_CHARGE: fieldBuilder.buildEdmTypeField(
          'DeferredRentCharge',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link straightLineCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_COST: fieldBuilder.buildEdmTypeField(
          'StraightLineCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferredRentBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_RENT_BALANCE: fieldBuilder.buildEdmTypeField(
          'DeferredRentBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link balloonPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALLOON_PAYMENT: fieldBuilder.buildEnumField(
          'BalloonPayment',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeasePaymentScheduleLineBiEntities)
      };
    }

    return this._schema;
  }
}
