/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonDetails } from './PersonDetails';
import { PersonDetailsRequestBuilder } from './PersonDetailsRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { VeteranStatusesApi } from './VeteranStatusesApi';
import { NoYes } from './NoYes';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
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
export class PersonDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonDetails<DeSerializersT>, DeSerializersT>
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
  ): PersonDetailsApi<DeSerializersT> {
    return new PersonDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PeopleApi<DeSerializersT>, VeteranStatusesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      VETERAN_STATUS: new OneToOneLink('VeteranStatus', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PersonDetails;

  requestBuilder(): PersonDetailsRequestBuilder<DeSerializersT> {
    return new PersonDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonDetails<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonDetails, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonDetails, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILITARY_SERVICE_END_DATE: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_OF_DEPENDENTS: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_EXPATRIATE_RULING_APPLICABLE: EnumField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DISABLED_VETERAN: EnumField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      HcmPersonMaritalStatus,
      true,
      true
    >;
    EXPATRIATE_RULING_VALID_TO: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILITARY_SERVICE_START_DATE: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPATRIATE_RULING_VALID_FROM: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VETERAN_STATUS_ID: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_MARITAL_STATUS_DATE: OrderableEdmTypeField<
      PersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      PersonDetails<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
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
         * Static representation of the {@link militaryServiceEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link numberOfDependents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DEPENDENTS: fieldBuilder.buildEdmTypeField(
          'NumberOfDependents',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isExpatriateRulingApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPATRIATE_RULING_APPLICABLE: fieldBuilder.buildEnumField(
          'IsExpatriateRulingApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDisabledVeteran} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED_VETERAN: fieldBuilder.buildEnumField(
          'IsDisabledVeteran',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          HcmPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link expatriateRulingValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPATRIATE_RULING_VALID_TO: fieldBuilder.buildEdmTypeField(
          'ExpatriateRulingValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link militaryServiceStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expatriateRulingValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPATRIATE_RULING_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ExpatriateRulingValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link veteranStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'VeteranStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitMaritalStatusDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_MARITAL_STATUS_DATE: fieldBuilder.buildEdmTypeField(
          'BenefitMaritalStatusDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonDetails)
      };
    }

    return this._schema;
  }
}
