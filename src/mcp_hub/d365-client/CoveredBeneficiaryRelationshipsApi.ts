/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CoveredBeneficiaryRelationships } from './CoveredBeneficiaryRelationships';
import { CoveredBeneficiaryRelationshipsRequestBuilder } from './CoveredBeneficiaryRelationshipsRequestBuilder';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import { HcmBeneficiaryDesignation } from './HcmBeneficiaryDesignation';
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
export class CoveredBeneficiaryRelationshipsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CoveredBeneficiaryRelationships<DeSerializersT>, DeSerializersT>
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
  ): CoveredBeneficiaryRelationshipsApi<DeSerializersT> {
    return new CoveredBeneficiaryRelationshipsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      CoveredBeneficiaryRelationships<DeSerializersT>,
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

  entityConstructor = CoveredBeneficiaryRelationships;

  requestBuilder(): CoveredBeneficiaryRelationshipsRequestBuilder<DeSerializersT> {
    return new CoveredBeneficiaryRelationshipsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CoveredBeneficiaryRelationships<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CoveredBeneficiaryRelationships<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CoveredBeneficiaryRelationships<DeSerializersT>,
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
    typeof CoveredBeneficiaryRelationships,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CoveredBeneficiaryRelationships,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RELATIONSHIP_TYPE_ID: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHILD_PARTY_ID: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_RELATIONSHIP_DATA_AREA_ID: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_RELATIONSHIP_VALID_TO: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_RELATIONSHIP_VALID_FROM: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESIGNATED: EnumField<
      CoveredBeneficiaryRelationships<DeSerializers>,
      DeSerializersT,
      HcmBeneficiaryDesignation,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      CoveredBeneficiaryRelationships<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CoveredBeneficiaryRelationships<DeSerializers>>;
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
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link designated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGNATED: fieldBuilder.buildEnumField(
          'Designated',
          HcmBeneficiaryDesignation,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CoveredBeneficiaryRelationships)
      };
    }

    return this._schema;
  }
}
