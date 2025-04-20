/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeRequestSources } from './EngineeringChangeRequestSources';
import { EngineeringChangeRequestSourcesRequestBuilder } from './EngineeringChangeRequestSourcesRequestBuilder';
import { EngineeringChangeRequestHeadersApi } from './EngineeringChangeRequestHeadersApi';
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
export class EngineeringChangeRequestSourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeRequestSources<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeRequestSourcesApi<DeSerializersT> {
    return new EngineeringChangeRequestSourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADER: OneToOneLink<
      EngineeringChangeRequestSources<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringChangeRequestHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_REQUEST_HEADER: new OneToOneLink(
        'EngineeringChangeRequestHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeRequestSources;

  requestBuilder(): EngineeringChangeRequestSourcesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeRequestSourcesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeRequestSources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeRequestSources<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeRequestSources<DeSerializersT>,
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
    typeof EngineeringChangeRequestSources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeRequestSources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_CHANGE_REQUEST_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_TYPE: OrderableEdmTypeField<
      EngineeringChangeRequestSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EngineeringChangeRequestSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TRANSACTION_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeRequestSources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_HEADER: OneToOneLink<
      EngineeringChangeRequestSources<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeRequestSources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringChangeRequestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_REQUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeRequestNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SourceLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTransactionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANSACTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SourceTransactionDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeRequestSources)
      };
    }

    return this._schema;
  }
}
