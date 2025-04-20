/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkUnavailable } from './WhsMobileWorkUnavailable';
import { WhsMobileWorkUnavailableRequestBuilder } from './WhsMobileWorkUnavailableRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class WhsMobileWorkUnavailableApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WhsMobileWorkUnavailable<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkUnavailableApi<DeSerializersT> {
    return new WhsMobileWorkUnavailableApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WhsMobileWorkUnavailable;

  requestBuilder(): WhsMobileWorkUnavailableRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkUnavailableRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkUnavailable<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WhsMobileWorkUnavailable<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkUnavailable<DeSerializersT>,
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
    typeof WhsMobileWorkUnavailable,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkUnavailable,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkUnavailable<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SESSION_REC_ID: OrderableEdmTypeField<
      WhsMobileWorkUnavailable<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBMISSION_TYPE: OrderableEdmTypeField<
      WhsMobileWorkUnavailable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkUnavailable<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sessionRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_REC_ID: fieldBuilder.buildEdmTypeField(
          'SessionRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link submissionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_TYPE: fieldBuilder.buildEdmTypeField(
          'SubmissionType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WhsMobileWorkUnavailable)
      };
    }

    return this._schema;
  }
}
