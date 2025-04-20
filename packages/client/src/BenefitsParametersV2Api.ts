/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsParametersV2 } from './BenefitsParametersV2';
import { BenefitsParametersV2RequestBuilder } from './BenefitsParametersV2RequestBuilder';
import { BenefitsPayFrequenciesApi } from './BenefitsPayFrequenciesApi';
import { ReasonCodesApi } from './ReasonCodesApi';
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
export class BenefitsParametersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsParametersV2<DeSerializersT>, DeSerializersT>
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
  ): BenefitsParametersV2Api<DeSerializersT> {
    return new BenefitsParametersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultEnrollmentReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_ENROLLMENT_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultCancelReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_CANCEL_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLifeEventReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LIFE_EVENT_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReopenReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_REOPEN_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPayFrequenciesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PAY_FREQUENCY: new OneToOneLink(
        'BenefitsPayFrequency',
        this,
        linkedApis[0]
      ),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[1]),
      DEFAULT_ENROLLMENT_REASON_CODE: new OneToOneLink(
        'DefaultEnrollmentReasonCode',
        this,
        linkedApis[2]
      ),
      DEFAULT_CANCEL_REASON_CODE: new OneToOneLink(
        'DefaultCancelReasonCode',
        this,
        linkedApis[3]
      ),
      DEFAULT_LIFE_EVENT_REASON_CODE: new OneToOneLink(
        'DefaultLifeEventReasonCode',
        this,
        linkedApis[4]
      ),
      DEFAULT_REOPEN_REASON_CODE: new OneToOneLink(
        'DefaultReopenReasonCode',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = BenefitsParametersV2;

  requestBuilder(): BenefitsParametersV2RequestBuilder<DeSerializersT> {
    return new BenefitsParametersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsParametersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsParametersV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsParametersV2<DeSerializersT>,
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
    typeof BenefitsParametersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsParametersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_RATE_CHANGE_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_HIRE_ENROLLMENT_PERIOD: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_PAY_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_REOPEN_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_HIRE_ELIGIBLE: EnumField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_LIFE_EVENT_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CANCEL_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ENROLLMENT_REASON_CODE_ID: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_EVENTS_ENABLED: EnumField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HIDE_LEGACY_BENEFIT_FORMS: EnumField<
      BenefitsParametersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BENEFITS_VERIFICATION_FOR_ESS: OrderableEdmTypeField<
      BenefitsParametersV2<DeSerializers>,
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
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultEnrollmentReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_ENROLLMENT_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultCancelReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_CANCEL_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLifeEventReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LIFE_EVENT_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultReopenReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_REOPEN_REASON_CODE: OneToOneLink<
      BenefitsParametersV2<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsParametersV2<DeSerializers>>;
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
         * Static representation of the {@link defaultRateChangeReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RATE_CHANGE_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultRateChangeReasonCodeId',
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
         * Static representation of the {@link newHireEnrollmentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_HIRE_ENROLLMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'NewHireEnrollmentPeriod',
          'Edm.Int32',
          false
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
         * Static representation of the {@link defaultReopenReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REOPEN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultReopenReasonCodeId',
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
         * Static representation of the {@link defaultLifeEventReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LIFE_EVENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultLifeEventReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCancelReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CANCEL_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCancelReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultEnrollmentReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ENROLLMENT_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultEnrollmentReasonCodeId',
          'Edm.String',
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
         * Static representation of the {@link hideLegacyBenefitForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_LEGACY_BENEFIT_FORMS: fieldBuilder.buildEnumField(
          'HideLegacyBenefitForms',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsParametersV2)
      };
    }

    return this._schema;
  }
}
