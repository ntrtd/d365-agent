/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActionClasses } from './ActionClasses';
import { ActionClassesRequestBuilder } from './ActionClassesRequestBuilder';
import { EmActionType } from './EmActionType';
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
export class ActionClassesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ActionClasses<DeSerializersT>, DeSerializersT>
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
  ): ActionClassesApi<DeSerializersT> {
    return new ActionClassesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ActionClasses;

  requestBuilder(): ActionClassesRequestBuilder<DeSerializersT> {
    return new ActionClassesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActionClasses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ActionClasses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ActionClasses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ActionClasses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ActionClasses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ActionClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXECUTABLE_CLASS: OrderableEdmTypeField<
      ActionClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASS_NAME: OrderableEdmTypeField<
      ActionClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ActionClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_TYPE: EnumField<
      ActionClasses<DeSerializers>,
      DeSerializersT,
      EmActionType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ActionClasses<DeSerializers>>;
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
         * Static representation of the {@link executableClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTABLE_CLASS: fieldBuilder.buildEdmTypeField(
          'ExecutableClass',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link className} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ClassName',
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
        /**
         * Static representation of the {@link actionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TYPE: fieldBuilder.buildEnumField(
          'ActionType',
          EmActionType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActionClasses)
      };
    }

    return this._schema;
  }
}
