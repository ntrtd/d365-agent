/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocAuthorityWebservices } from './EfDocAuthorityWebservices';
import { EfDocAuthorityWebservicesRequestBuilder } from './EfDocAuthorityWebservicesRequestBuilder';
import { EfDocWebServiceBr } from './EfDocWebServiceBr';
import { EfDocEnvironmentBr } from './EfDocEnvironmentBr';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class EfDocAuthorityWebservicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EfDocAuthorityWebservices<DeSerializersT>, DeSerializersT>
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
  ): EfDocAuthorityWebservicesApi<DeSerializersT> {
    return new EfDocAuthorityWebservicesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocAuthorityWebservices;

  requestBuilder(): EfDocAuthorityWebservicesRequestBuilder<DeSerializersT> {
    return new EfDocAuthorityWebservicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocAuthorityWebservices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EfDocAuthorityWebservices<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocAuthorityWebservices<DeSerializersT>,
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
    typeof EfDocAuthorityWebservices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocAuthorityWebservices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WEB_SERVICE_TYPE: EnumField<
      EfDocAuthorityWebservices<DeSerializers>,
      DeSerializersT,
      EfDocWebServiceBr,
      true,
      true
    >;
    ENVIRONMENT_TYPE: EnumField<
      EfDocAuthorityWebservices<DeSerializers>,
      DeSerializersT,
      EfDocEnvironmentBr,
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      EfDocAuthorityWebservices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AUTHORITY: OrderableEdmTypeField<
      EfDocAuthorityWebservices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      EfDocAuthorityWebservices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocAuthorityWebservices<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link webServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SERVICE_TYPE: fieldBuilder.buildEnumField(
          'WebServiceType',
          EfDocWebServiceBr,
          true
        ),
        /**
         * Static representation of the {@link environmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT_TYPE: fieldBuilder.buildEnumField(
          'EnvironmentType',
          EfDocEnvironmentBr,
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link authority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY: fieldBuilder.buildEdmTypeField(
          'Authority',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocAuthorityWebservices)
      };
    }

    return this._schema;
  }
}
