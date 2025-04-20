/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectPeriods } from './ProjectPeriods';
import { ProjectPeriodsRequestBuilder } from './ProjectPeriodsRequestBuilder';
import { RebateAndDeductionsAgreementDateSetupsApi } from './RebateAndDeductionsAgreementDateSetupsApi';
import { NoYes } from './NoYes';
import { WeekDays } from './WeekDays';
import { TsPerWeekMth } from './TsPerWeekMth';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectPeriods<DeSerializersT>, DeSerializersT>
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
  ): ProjectPeriodsApi<DeSerializersT> {
    return new ProjectPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateClaimAssignedRebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_CLAIM_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      ProjectPeriods<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateProvisionAssignedRebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_PROVISION_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      ProjectPeriods<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_CLAIM_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS:
        new OneToManyLink(
          'RebateClaimAssignedRebateAndDeductionsDateSetups',
          this,
          linkedApis[0]
        ),
      REBATE_PROVISION_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS:
        new OneToManyLink(
          'RebateProvisionAssignedRebateAndDeductionsDateSetups',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = ProjectPeriods;

  requestBuilder(): ProjectPeriodsRequestBuilder<DeSerializersT> {
    return new ProjectPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjectPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_WEEK_AUTO_SPLIT: EnumField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WEEK_DAY_PERIOD_START: EnumField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREQUENCY: EnumField<
      ProjectPeriods<DeSerializers>,
      DeSerializersT,
      TsPerWeekMth,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateClaimAssignedRebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_CLAIM_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      ProjectPeriods<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateProvisionAssignedRebateAndDeductionsDateSetups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_PROVISION_ASSIGNED_REBATE_AND_DEDUCTIONS_DATE_SETUPS: OneToManyLink<
      ProjectPeriods<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectPeriods<DeSerializers>>;
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
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isWeekAutoSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WEEK_AUTO_SPLIT: fieldBuilder.buildEnumField(
          'IsWeekAutoSplit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link weekDayPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEK_DAY_PERIOD_START: fieldBuilder.buildEnumField(
          'WeekDayPeriodStart',
          WeekDays,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField('Frequency', TsPerWeekMth, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectPeriods)
      };
    }

    return this._schema;
  }
}
