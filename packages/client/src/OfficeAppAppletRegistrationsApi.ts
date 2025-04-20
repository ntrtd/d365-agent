/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OfficeAppAppletRegistrations } from './OfficeAppAppletRegistrations';
import { OfficeAppAppletRegistrationsRequestBuilder } from './OfficeAppAppletRegistrationsRequestBuilder';
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
export class OfficeAppAppletRegistrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OfficeAppAppletRegistrations<DeSerializersT>, DeSerializersT>
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
  ): OfficeAppAppletRegistrationsApi<DeSerializersT> {
    return new OfficeAppAppletRegistrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OfficeAppAppletRegistrations;

  requestBuilder(): OfficeAppAppletRegistrationsRequestBuilder<DeSerializersT> {
    return new OfficeAppAppletRegistrationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OfficeAppAppletRegistrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OfficeAppAppletRegistrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OfficeAppAppletRegistrations<DeSerializersT>,
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
    typeof OfficeAppAppletRegistrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OfficeAppAppletRegistrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APPLET_ID: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENT_ON: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIVE_URL: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORTED_APPLICATIONS: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIRED_APP_VERSION: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OfficeAppAppletRegistrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OfficeAppAppletRegistrations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link appletId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLET_ID: fieldBuilder.buildEdmTypeField(
          'AppletID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependentOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_ON: fieldBuilder.buildEdmTypeField(
          'DependentOn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relativeUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIVE_URL: fieldBuilder.buildEdmTypeField(
          'RelativeUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link supportedApplications} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTED_APPLICATIONS: fieldBuilder.buildEdmTypeField(
          'SupportedApplications',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requiredAppVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_APP_VERSION: fieldBuilder.buildEdmTypeField(
          'RequiredAppVersion',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', OfficeAppAppletRegistrations)
      };
    }

    return this._schema;
  }
}
