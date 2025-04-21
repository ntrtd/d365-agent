/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeferralsProfiles } from './DeferralsProfiles';
import { DeferralsProfilesRequestBuilder } from './DeferralsProfilesRequestBuilder';
import { RDeferralsMethod } from './RDeferralsMethod';
import { RDeferralsCalculatePeriod } from './RDeferralsCalculatePeriod';
import { RDeferralsInterval } from './RDeferralsInterval';
import { RDeferralsManualCalcType } from './RDeferralsManualCalcType';
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
export class DeferralsProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeferralsProfiles<DeSerializersT>, DeSerializersT>
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
  ): DeferralsProfilesApi<DeSerializersT> {
    return new DeferralsProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DeferralsProfiles;

  requestBuilder(): DeferralsProfilesRequestBuilder<DeSerializersT> {
    return new DeferralsProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeferralsProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeferralsProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DeferralsProfiles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DeferralsProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeferralsProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITING_OFF_PROFILE: OrderableEdmTypeField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITING_OFF_METHOD: EnumField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      RDeferralsMethod,
      true,
      true
    >;
    ROUND_OFF_OPERATION: OrderableEdmTypeField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATION_PERIOD: EnumField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      RDeferralsCalculatePeriod,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITING_OFF_PERIOD: EnumField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      RDeferralsInterval,
      true,
      true
    >;
    CALCULATION_TYPE: EnumField<
      DeferralsProfiles<DeSerializers>,
      DeSerializersT,
      RDeferralsManualCalcType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DeferralsProfiles<DeSerializers>>;
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
         * Static representation of the {@link writingOffProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_PROFILE: fieldBuilder.buildEdmTypeField(
          'WritingOffProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link writingOffMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_METHOD: fieldBuilder.buildEnumField(
          'WritingOffMethod',
          RDeferralsMethod,
          true
        ),
        /**
         * Static representation of the {@link roundOffOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_OPERATION: fieldBuilder.buildEdmTypeField(
          'RoundOffOperation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_PERIOD: fieldBuilder.buildEnumField(
          'CalculationPeriod',
          RDeferralsCalculatePeriod,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link writingOffPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_PERIOD: fieldBuilder.buildEnumField(
          'WritingOffPeriod',
          RDeferralsInterval,
          true
        ),
        /**
         * Static representation of the {@link calculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_TYPE: fieldBuilder.buildEnumField(
          'CalculationType',
          RDeferralsManualCalcType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeferralsProfiles)
      };
    }

    return this._schema;
  }
}
