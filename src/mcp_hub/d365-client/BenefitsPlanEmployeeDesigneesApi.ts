/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanEmployeeDesignees } from './BenefitsPlanEmployeeDesignees';
import { BenefitsPlanEmployeeDesigneesRequestBuilder } from './BenefitsPlanEmployeeDesigneesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BenefitBeneficiaryPriority } from './BenefitBeneficiaryPriority';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsPlanEmployeeDesigneesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitsPlanEmployeeDesignees<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanEmployeeDesigneesApi<DeSerializersT> {
    return new BenefitsPlanEmployeeDesigneesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPlanEmployeeDesignees<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitsPlanEmployeeDesignees;

  requestBuilder(): BenefitsPlanEmployeeDesigneesRequestBuilder<DeSerializersT> {
    return new BenefitsPlanEmployeeDesigneesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanEmployeeDesignees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanEmployeeDesignees<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanEmployeeDesignees<DeSerializersT>,
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
    typeof BenefitsPlanEmployeeDesignees,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanEmployeeDesignees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESIGNEE_PARTY_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_PARTY_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESIGNEE_NAME: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFICIARY_PERCENT: OrderableEdmTypeField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BENEFICIARY_PRIORITY: EnumField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      BenefitBeneficiaryPriority,
      true,
      true
    >;
    PLAN_STATUS: EnumField<
      BenefitsPlanEmployeeDesignees<DeSerializers>,
      DeSerializersT,
      BenefitEmployeePlanStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPlanEmployeeDesignees<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPlanEmployeeDesignees<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link designeePartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGNEE_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DesigneePartyNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link workerPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link designeeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'DesigneeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beneficiaryPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFICIARY_PERCENT: fieldBuilder.buildEdmTypeField(
          'BeneficiaryPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link beneficiaryPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFICIARY_PRIORITY: fieldBuilder.buildEnumField(
          'BeneficiaryPriority',
          BenefitBeneficiaryPriority,
          true
        ),
        /**
         * Static representation of the {@link planStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_STATUS: fieldBuilder.buildEnumField(
          'PlanStatus',
          BenefitEmployeePlanStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlanEmployeeDesignees)
      };
    }

    return this._schema;
  }
}
