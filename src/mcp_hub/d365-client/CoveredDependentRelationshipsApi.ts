/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CoveredDependentRelationships } from './CoveredDependentRelationships';
import { CoveredDependentRelationshipsRequestBuilder } from './CoveredDependentRelationshipsRequestBuilder';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CoveredDependentRelationshipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CoveredDependentRelationships<DeSerializersT>, DeSerializersT>
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
  ): CoveredDependentRelationshipsApi<DeSerializersT> {
    return new CoveredDependentRelationshipsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      CoveredDependentRelationships<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerEnrolledBenefitsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT: new OneToOneLink(
        'WorkerEnrolledBenefit',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CoveredDependentRelationships;

  requestBuilder(): CoveredDependentRelationshipsRequestBuilder<DeSerializersT> {
    return new CoveredDependentRelationshipsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CoveredDependentRelationships<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CoveredDependentRelationships<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CoveredDependentRelationships<DeSerializersT>,
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
    typeof CoveredDependentRelationships,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CoveredDependentRelationships,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELATIONSHIP_TYPE_ID: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_PARTY_ID: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_RELATIONSHIP_DATA_AREA_ID: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_RELATIONSHIP_VALID_TO: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_RELATIONSHIP_VALID_FROM: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CoveredDependentRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      CoveredDependentRelationships<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CoveredDependentRelationships<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link enrollmentStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_START: fieldBuilder.buildEdmTypeField(
          'EnrollmentStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollmentEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_END: fieldBuilder.buildEdmTypeField(
          'EnrollmentEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link relationshipTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RelationshipTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link childPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHILD_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'ChildPartyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyRelationshipDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_RELATIONSHIP_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'PartyRelationshipDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyRelationshipValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_RELATIONSHIP_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PartyRelationshipValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link partyRelationshipValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_RELATIONSHIP_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PartyRelationshipValidFrom',
          'Edm.DateTimeOffset',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CoveredDependentRelationships)
      };
    }

    return this._schema;
  }
}
