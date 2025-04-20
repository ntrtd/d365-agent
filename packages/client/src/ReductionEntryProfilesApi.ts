/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReductionEntryProfiles } from './ReductionEntryProfiles';
import { ReductionEntryProfilesRequestBuilder } from './ReductionEntryProfilesRequestBuilder';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
import { AssetReductionEntryConventionJp } from './AssetReductionEntryConventionJp';
import { AssetReductionEntryMethodJp } from './AssetReductionEntryMethodJp';
import { AssetReductionEntryStartFromJp } from './AssetReductionEntryStartFromJp';
import { AssetReductionEntryRepayTypeJp } from './AssetReductionEntryRepayTypeJp';
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
export class ReductionEntryProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReductionEntryProfiles<DeSerializersT>, DeSerializersT>
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
  ): ReductionEntryProfilesApi<DeSerializersT> {
    return new ReductionEntryProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReductionEntryProfiles;

  requestBuilder(): ReductionEntryProfilesRequestBuilder<DeSerializersT> {
    return new ReductionEntryProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReductionEntryProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReductionEntryProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReductionEntryProfiles<DeSerializersT>,
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
    typeof ReductionEntryProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReductionEntryProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REDUCTION_ENTRY_DOCUMENT: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETENTION_PERIOD_MEASURE: EnumField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      DayWeekMonthQuarterYear,
      true,
      true
    >;
    SUBSIDIES_REASON: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_AMT: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_CONVENTION: EnumField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      AssetReductionEntryConventionJp,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETENTION_PERIOD: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REDUCTION_ENTRY_TYPE: EnumField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      AssetReductionEntryMethodJp,
      true,
      true
    >;
    RETENTION_START_DATE: EnumField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      AssetReductionEntryStartFromJp,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPAYMENT_TYPE: EnumField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      AssetReductionEntryRepayTypeJp,
      true,
      true
    >;
    MAX_PER: OrderableEdmTypeField<
      ReductionEntryProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ReductionEntryProfiles<DeSerializers>>;
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
         * Static representation of the {@link reductionEntryDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_ENTRY_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ReductionEntryDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link retentionPeriodMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_PERIOD_MEASURE: fieldBuilder.buildEnumField(
          'RetentionPeriodMeasure',
          DayWeekMonthQuarterYear,
          true
        ),
        /**
         * Static representation of the {@link subsidiesReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSIDIES_REASON: fieldBuilder.buildEdmTypeField(
          'SubsidiesReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_AMT: fieldBuilder.buildEdmTypeField('MaxAmt', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link depreciationConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_CONVENTION: fieldBuilder.buildEnumField(
          'DepreciationConvention',
          AssetReductionEntryConventionJp,
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retentionPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_PERIOD: fieldBuilder.buildEdmTypeField(
          'RetentionPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reductionEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'ReductionEntryType',
          AssetReductionEntryMethodJp,
          true
        ),
        /**
         * Static representation of the {@link retentionStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_START_DATE: fieldBuilder.buildEnumField(
          'RetentionStartDate',
          AssetReductionEntryStartFromJp,
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link repaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPAYMENT_TYPE: fieldBuilder.buildEnumField(
          'RepaymentType',
          AssetReductionEntryRepayTypeJp,
          true
        ),
        /**
         * Static representation of the {@link maxPer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_PER: fieldBuilder.buildEdmTypeField('MaxPer', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReductionEntryProfiles)
      };
    }

    return this._schema;
  }
}
