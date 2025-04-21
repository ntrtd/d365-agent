/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsParameters } from './BenefitsParameters';
import { BenefitsParametersRequestBuilder } from './BenefitsParametersRequestBuilder';
import { BenefitsPayFrequenciesApi } from './BenefitsPayFrequenciesApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsParameters<DeSerializersT>, DeSerializersT>
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
  ): BenefitsParametersApi<DeSerializersT> {
    return new BenefitsParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsParameters<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitsPayFrequenciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PAY_FREQUENCY: new OneToOneLink(
        'BenefitsPayFrequency',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BenefitsParameters;

  requestBuilder(): BenefitsParametersRequestBuilder<DeSerializersT> {
    return new BenefitsParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsParameters<DeSerializersT>,
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
    typeof BenefitsParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIFE_EVENT_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_LEGACY_BENEFIT_FORMS: EnumField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEW_HIRE_ENROLLMENT_PERIOD: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENROLLMENT_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_HIRE_ELIGIBLE: EnumField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIFE_EVENTS_ENABLED: EnumField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFITS_VERIFICATION_FOR_ESS: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_CHANGE_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLATION_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_SELECT_DESIGNEES_FOR_ESS: EnumField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PAY_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RE_OPEN_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsParameters<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lifeEventReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'LifeEventReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hideLegacyBenefitForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_LEGACY_BENEFIT_FORMS: fieldBuilder.buildEnumField(
          'HideLegacyBenefitForms',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link newHireEnrollmentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_HIRE_ENROLLMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'NewHireEnrollmentPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enrollmentReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EnrollmentReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newHireEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_HIRE_ELIGIBLE: fieldBuilder.buildEnumField(
          'NewHireEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lifeEventsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENTS_ENABLED: fieldBuilder.buildEnumField(
          'LifeEventsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link benefitsVerificationForEss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFITS_VERIFICATION_FOR_ESS: fieldBuilder.buildEdmTypeField(
          'BenefitsVerificationForEss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateChangeReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_CHANGE_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'RateChangeReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancellationReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'CancellationReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoSelectDesigneesForEss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SELECT_DESIGNEES_FOR_ESS: fieldBuilder.buildEnumField(
          'AutoSelectDesigneesForEss',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPayFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PAY_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultPayFrequencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reOpenReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RE_OPEN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReOpenReasonCodeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsParameters)
      };
    }

    return this._schema;
  }
}
