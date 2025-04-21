/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActionStatusToes } from './ActionStatusToes';
import { ActionStatusToesRequestBuilder } from './ActionStatusToesRequestBuilder';
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
export class ActionStatusToesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ActionStatusToes<DeSerializersT>, DeSerializersT>
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
  ): ActionStatusToesApi<DeSerializersT> {
    return new ActionStatusToesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ActionStatusToes;

  requestBuilder(): ActionStatusToesRequestBuilder<DeSerializersT> {
    return new ActionStatusToesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActionStatusToes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ActionStatusToes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ActionStatusToes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ActionStatusToes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ActionStatusToes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ActionStatusToes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      ActionStatusToes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_STATUS: OrderableEdmTypeField<
      ActionStatusToes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_STATUS: OrderableEdmTypeField<
      ActionStatusToes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ActionStatusToes<DeSerializers>>;
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
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.String', false),
        /**
         * Static representation of the {@link messageStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_STATUS: fieldBuilder.buildEdmTypeField(
          'MessageStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STATUS: fieldBuilder.buildEdmTypeField(
          'ItemStatus',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActionStatusToes)
      };
    }

    return this._schema;
  }
}
