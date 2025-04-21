/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmProcessingActionSequences } from './EmProcessingActionSequences';
import { EmProcessingActionSequencesRequestBuilder } from './EmProcessingActionSequencesRequestBuilder';
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
export class EmProcessingActionSequencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EmProcessingActionSequences<DeSerializersT>, DeSerializersT>
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
  ): EmProcessingActionSequencesApi<DeSerializersT> {
    return new EmProcessingActionSequencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmProcessingActionSequences;

  requestBuilder(): EmProcessingActionSequencesRequestBuilder<DeSerializersT> {
    return new EmProcessingActionSequencesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmProcessingActionSequences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EmProcessingActionSequences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmProcessingActionSequences<DeSerializersT>,
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
    typeof EmProcessingActionSequences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmProcessingActionSequences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EmProcessingActionSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_ID: OrderableEdmTypeField<
      EmProcessingActionSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EmProcessingActionSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmProcessingActionSequences<DeSerializers>>;
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
         * Static representation of the {@link sequenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_ID: fieldBuilder.buildEdmTypeField(
          'SequenceId',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmProcessingActionSequences)
      };
    }

    return this._schema;
  }
}
