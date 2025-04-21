/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClmIntegrationContracts } from './ClmIntegrationContracts';
import { ClmIntegrationContractsRequestBuilder } from './ClmIntegrationContractsRequestBuilder';
import { ClmIntegrationContractStatus } from './ClmIntegrationContractStatus';
import { NoYes } from './NoYes';
import { ClmIntegrationContractAccountType } from './ClmIntegrationContractAccountType';
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
export class ClmIntegrationContractsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ClmIntegrationContracts<DeSerializersT>, DeSerializersT>
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
  ): ClmIntegrationContractsApi<DeSerializersT> {
    return new ClmIntegrationContractsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ClmIntegrationContracts;

  requestBuilder(): ClmIntegrationContractsRequestBuilder<DeSerializersT> {
    return new ClmIntegrationContractsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ClmIntegrationContracts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ClmIntegrationContracts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClmIntegrationContracts<DeSerializersT>,
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
    typeof ClmIntegrationContracts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClmIntegrationContracts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_STATUS: EnumField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      ClmIntegrationContractStatus,
      true,
      true
    >;
    ACCOUNT_RELATION_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CONTRACT_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTER_WORKER_EMAIL: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_WORKER_NAME: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATEST_AMENDMENT_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMENDMENT_IN_PROCESS: EnumField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LATEST_EXTERNAL_AMENDMENT_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_NAME: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      ClmIntegrationContractAccountType,
      true,
      true
    >;
    CONTRACT_TYPE: OrderableEdmTypeField<
      ClmIntegrationContracts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ClmIntegrationContracts<DeSerializers>>;
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
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_STATUS: fieldBuilder.buildEnumField(
          'ContractStatus',
          ClmIntegrationContractStatus,
          true
        ),
        /**
         * Static representation of the {@link accountRelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION_ID: fieldBuilder.buildEdmTypeField(
          'AccountRelationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ExternalContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requesterWorkerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_WORKER_EMAIL: fieldBuilder.buildEdmTypeField(
          'RequesterWorkerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'RequesterWorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link latestAmendmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_AMENDMENT_ID: fieldBuilder.buildEdmTypeField(
          'LatestAmendmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amendmentInProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_IN_PROCESS: fieldBuilder.buildEnumField(
          'AmendmentInProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link latestExternalAmendmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_EXTERNAL_AMENDMENT_ID: fieldBuilder.buildEdmTypeField(
          'LatestExternalAmendmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContractName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          ClmIntegrationContractAccountType,
          true
        ),
        /**
         * Static representation of the {@link contractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContractType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClmIntegrationContracts)
      };
    }

    return this._schema;
  }
}
