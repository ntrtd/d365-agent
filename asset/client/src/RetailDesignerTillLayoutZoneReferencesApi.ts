/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDesignerTillLayoutZoneReferences } from './RetailDesignerTillLayoutZoneReferences';
import { RetailDesignerTillLayoutZoneReferencesRequestBuilder } from './RetailDesignerTillLayoutZoneReferencesRequestBuilder';
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
export class RetailDesignerTillLayoutZoneReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailDesignerTillLayoutZoneReferences<DeSerializersT>,
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
  ): RetailDesignerTillLayoutZoneReferencesApi<DeSerializersT> {
    return new RetailDesignerTillLayoutZoneReferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDesignerTillLayoutZoneReferences;

  requestBuilder(): RetailDesignerTillLayoutZoneReferencesRequestBuilder<DeSerializersT> {
    return new RetailDesignerTillLayoutZoneReferencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDesignerTillLayoutZoneReferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDesignerTillLayoutZoneReferences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDesignerTillLayoutZoneReferences<DeSerializersT>,
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
    typeof RetailDesignerTillLayoutZoneReferences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDesignerTillLayoutZoneReferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutZoneReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE: OrderableEdmTypeField<
      RetailDesignerTillLayoutZoneReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AX_REC_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutZoneReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailDesignerTillLayoutZoneReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailDesignerTillLayoutZoneReferences<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link zone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE: fieldBuilder.buildEdmTypeField('Zone', 'Edm.Int64', false),
        /**
         * Static representation of the {@link axRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AX_REC_ID: fieldBuilder.buildEdmTypeField(
          'AxRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDesignerTillLayoutZoneReferences)
      };
    }

    return this._schema;
  }
}
