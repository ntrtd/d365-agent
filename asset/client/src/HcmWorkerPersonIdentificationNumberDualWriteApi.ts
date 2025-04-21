/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HcmWorkerPersonIdentificationNumberDualWrite } from './HcmWorkerPersonIdentificationNumberDualWrite';
import { HcmWorkerPersonIdentificationNumberDualWriteRequestBuilder } from './HcmWorkerPersonIdentificationNumberDualWriteRequestBuilder';
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
export class HcmWorkerPersonIdentificationNumberDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
      DeSerializersT
    >
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
  ): HcmWorkerPersonIdentificationNumberDualWriteApi<DeSerializersT> {
    return new HcmWorkerPersonIdentificationNumberDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
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

  entityConstructor = HcmWorkerPersonIdentificationNumberDualWrite;

  requestBuilder(): HcmWorkerPersonIdentificationNumberDualWriteRequestBuilder<DeSerializersT> {
    return new HcmWorkerPersonIdentificationNumberDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
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
    typeof HcmWorkerPersonIdentificationNumberDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HcmWorkerPersonIdentificationNumberDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORKER_NUMBER: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ISSUING_AGENCY_ID: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_DATE: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: OrderableEdmTypeField<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      HcmWorkerPersonIdentificationNumberDualWrite<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link issuingAgencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_AGENCY_ID: fieldBuilder.buildEdmTypeField(
          'IssuingAgencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'IssueDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link entryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TYPE: fieldBuilder.buildEdmTypeField(
          'EntryType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          HcmWorkerPersonIdentificationNumberDualWrite
        )
      };
    }

    return this._schema;
  }
}
