/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonalContactOrganization } from './PersonalContactOrganization';
import { PersonalContactOrganizationRequestBuilder } from './PersonalContactOrganizationRequestBuilder';
import { RelationshipTypesApi } from './RelationshipTypesApi';
import { WorkersApi } from './WorkersApi';
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
export class PersonalContactOrganizationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PersonalContactOrganization<DeSerializersT>, DeSerializersT>
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
  ): PersonalContactOrganizationApi<DeSerializersT> {
    return new PersonalContactOrganizationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personalContactOrganizationRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_RELATIONSHIP_TYPE: OneToOneLink<
      PersonalContactOrganization<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactOrganizationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_WORKER: OneToOneLink<
      PersonalContactOrganization<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RelationshipTypesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSONAL_CONTACT_ORGANIZATION_RELATIONSHIP_TYPE: new OneToOneLink(
        'PersonalContactOrganizationRelationshipType',
        this,
        linkedApis[0]
      ),
      PERSONAL_CONTACT_ORGANIZATION_WORKER: new OneToOneLink(
        'PersonalContactOrganizationWorker',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PersonalContactOrganization;

  requestBuilder(): PersonalContactOrganizationRequestBuilder<DeSerializersT> {
    return new PersonalContactOrganizationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonalContactOrganization<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonalContactOrganization<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonalContactOrganization<DeSerializersT>,
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
    typeof PersonalContactOrganization,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonalContactOrganization,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PersonalContactOrganization<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      PersonalContactOrganization<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      PersonalContactOrganization<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIONSHIP_TYPE: OrderableEdmTypeField<
      PersonalContactOrganization<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BENEFICIARY: EnumField<
      PersonalContactOrganization<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactOrganizationRelationshipType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_RELATIONSHIP_TYPE: OneToOneLink<
      PersonalContactOrganization<DeSerializersT>,
      DeSerializersT,
      RelationshipTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalContactOrganizationWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_CONTACT_ORGANIZATION_WORKER: OneToOneLink<
      PersonalContactOrganization<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonalContactOrganization<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactOrganizationPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField(
          'RelationshipType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBeneficiary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BENEFICIARY: fieldBuilder.buildEnumField(
          'IsBeneficiary',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonalContactOrganization)
      };
    }

    return this._schema;
  }
}
