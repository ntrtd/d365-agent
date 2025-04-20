/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitExternalReportings } from './BenefitExternalReportings';
import { BenefitExternalReportingsRequestBuilder } from './BenefitExternalReportingsRequestBuilder';
import { BenefitPlansApi } from './BenefitPlansApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { PayrollW2BoxNumber } from './PayrollW2BoxNumber';
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
export class BenefitExternalReportingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitExternalReportings<DeSerializersT>, DeSerializersT>
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
  ): BenefitExternalReportingsApi<DeSerializersT> {
    return new BenefitExternalReportingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitExternalReportings<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      BenefitExternalReportings<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitPlansApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PLAN: new OneToOneLink('BenefitPlan', this, linkedApis[0]),
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitExternalReportings;

  requestBuilder(): BenefitExternalReportingsRequestBuilder<DeSerializersT> {
    return new BenefitExternalReportingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitExternalReportings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitExternalReportings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitExternalReportings<DeSerializersT>,
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
    typeof BenefitExternalReportings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitExternalReportings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    W_2_BOX_NUMBER_CONTRIBUTION: EnumField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      PayrollW2BoxNumber,
      true,
      true
    >;
    W_2_BOX_NUMBER: EnumField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      PayrollW2BoxNumber,
      true,
      true
    >;
    W_2_BOX_LABEL_CONTRIBUTION: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    W_2_BOX_LABEL: OrderableEdmTypeField<
      BenefitExternalReportings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitExternalReportings<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      BenefitExternalReportings<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitExternalReportings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'BenefitPlanID',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link w2BoxNumberContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_NUMBER_CONTRIBUTION: fieldBuilder.buildEnumField(
          'W2BoxNumberContribution',
          PayrollW2BoxNumber,
          true
        ),
        /**
         * Static representation of the {@link w2BoxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_NUMBER: fieldBuilder.buildEnumField(
          'W2BoxNumber',
          PayrollW2BoxNumber,
          true
        ),
        /**
         * Static representation of the {@link w2BoxLabelContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_LABEL_CONTRIBUTION: fieldBuilder.buildEdmTypeField(
          'W2BoxLabelContribution',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link w2BoxLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_2_BOX_LABEL: fieldBuilder.buildEdmTypeField(
          'W2BoxLabel',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitExternalReportings)
      };
    }

    return this._schema;
  }
}
