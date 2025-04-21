/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BiFormControlBindings } from './BiFormControlBindings';
import { BiFormControlBindingsRequestBuilder } from './BiFormControlBindingsRequestBuilder';
import { PowerBiControlSize } from './PowerBiControlSize';
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
export class BiFormControlBindingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BiFormControlBindings<DeSerializersT>, DeSerializersT>
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
  ): BiFormControlBindingsApi<DeSerializersT> {
    return new BiFormControlBindingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BiFormControlBindings;

  requestBuilder(): BiFormControlBindingsRequestBuilder<DeSerializersT> {
    return new BiFormControlBindingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BiFormControlBindings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BiFormControlBindings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BiFormControlBindings<DeSerializersT>,
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
    typeof BiFormControlBindings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BiFormControlBindings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORM_NAME: OrderableEdmTypeField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DASHBOARD_ID: OrderableEdmTypeField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CONTROL_ID: OrderableEdmTypeField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SIZE: EnumField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      PowerBiControlSize,
      true,
      true
    >;
    EMBED_URL: OrderableEdmTypeField<
      BiFormControlBindings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BiFormControlBindings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_NAME: fieldBuilder.buildEdmTypeField(
          'formName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link dashboardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DASHBOARD_ID: fieldBuilder.buildEdmTypeField(
          'dashboardId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link controlId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_ID: fieldBuilder.buildEdmTypeField(
          'controlId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEnumField('size', PowerBiControlSize, true),
        /**
         * Static representation of the {@link embedUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMBED_URL: fieldBuilder.buildEdmTypeField(
          'embedUrl',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BiFormControlBindings)
      };
    }

    return this._schema;
  }
}
