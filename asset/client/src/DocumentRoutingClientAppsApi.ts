/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentRoutingClientApps } from './DocumentRoutingClientApps';
import { DocumentRoutingClientAppsRequestBuilder } from './DocumentRoutingClientAppsRequestBuilder';
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
export class DocumentRoutingClientAppsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DocumentRoutingClientApps<DeSerializersT>, DeSerializersT>
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
  ): DocumentRoutingClientAppsApi<DeSerializersT> {
    return new DocumentRoutingClientAppsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentRoutingClientApps;

  requestBuilder(): DocumentRoutingClientAppsRequestBuilder<DeSerializersT> {
    return new DocumentRoutingClientAppsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentRoutingClientApps<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentRoutingClientApps<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentRoutingClientApps<DeSerializersT>,
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
    typeof DocumentRoutingClientApps,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentRoutingClientApps,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLIENT_APPLICATION_ID: OrderableEdmTypeField<
      DocumentRoutingClientApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLIENT_APPLICATION_DESCRIPTION: OrderableEdmTypeField<
      DocumentRoutingClientApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocumentRoutingClientApps<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link clientApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'ClientApplicationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link clientApplicationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_APPLICATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ClientApplicationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentRoutingClientApps)
      };
    }

    return this._schema;
  }
}
