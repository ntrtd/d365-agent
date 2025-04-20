/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionHierarchyTypes } from './PositionHierarchyTypes';
import { PositionHierarchyTypesRequestBuilder } from './PositionHierarchyTypesRequestBuilder';
import { PayIntV1HcmPositionHierarchiesApi } from './PayIntV1HcmPositionHierarchiesApi';
import { PositionHierarchiesApi } from './PositionHierarchiesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PositionHierarchyTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionHierarchyTypes<DeSerializersT>, DeSerializersT>
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
  ): PositionHierarchyTypesApi<DeSerializersT> {
    return new PositionHierarchyTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionHierarchies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_HIERARCHIES: OneToManyLink<
      PositionHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionHierarchies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHIES: OneToManyLink<
      PositionHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>,
      PositionHierarchiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_POSITION_HIERARCHIES: new OneToManyLink(
        'PayIntPositionHierarchies',
        this,
        linkedApis[0]
      ),
      POSITION_HIERARCHIES: new OneToManyLink(
        'PositionHierarchies',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PositionHierarchyTypes;

  requestBuilder(): PositionHierarchyTypesRequestBuilder<DeSerializersT> {
    return new PositionHierarchyTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionHierarchyTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PositionHierarchyTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionHierarchyTypes<DeSerializersT>,
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
    typeof PositionHierarchyTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionHierarchyTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      PositionHierarchyTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionHierarchies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_HIERARCHIES: OneToManyLink<
      PositionHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionHierarchies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHIES: OneToManyLink<
      PositionHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      PositionHierarchiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionHierarchyTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionHierarchyTypes)
      };
    }

    return this._schema;
  }
}
