/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDesignerTillLayoutImageZones } from './RetailDesignerTillLayoutImageZones';
import { RetailDesignerTillLayoutImageZonesRequestBuilder } from './RetailDesignerTillLayoutImageZonesRequestBuilder';
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
export class RetailDesignerTillLayoutImageZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailDesignerTillLayoutImageZones<DeSerializersT>,
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
  ): RetailDesignerTillLayoutImageZonesApi<DeSerializersT> {
    return new RetailDesignerTillLayoutImageZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDesignerTillLayoutImageZones;

  requestBuilder(): RetailDesignerTillLayoutImageZonesRequestBuilder<DeSerializersT> {
    return new RetailDesignerTillLayoutImageZonesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDesignerTillLayoutImageZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDesignerTillLayoutImageZones<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDesignerTillLayoutImageZones<DeSerializersT>,
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
    typeof RetailDesignerTillLayoutImageZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDesignerTillLayoutImageZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutImageZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE: OrderableEdmTypeField<
      RetailDesignerTillLayoutImageZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AX_REC_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutImageZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailDesignerTillLayoutImageZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PICTURE_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutImageZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailDesignerTillLayoutImageZones<DeSerializers>>;
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
        /**
         * Static representation of the {@link pictureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_ID: fieldBuilder.buildEdmTypeField(
          'PictureId',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDesignerTillLayoutImageZones)
      };
    }

    return this._schema;
  }
}
