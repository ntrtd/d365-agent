/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1HcmPositionHierarchies } from './PayIntV1HcmPositionHierarchies';
import { PayIntV1HcmPositionHierarchiesRequestBuilder } from './PayIntV1HcmPositionHierarchiesRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { PositionHierarchyTypesApi } from './PositionHierarchyTypesApi';
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
export class PayIntV1HcmPositionHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1HcmPositionHierarchies<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1HcmPositionHierarchiesApi<DeSerializersT> {
    return new PayIntV1HcmPositionHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITION: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY_TYPE: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionHierarchyTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      PositionHierarchyTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION: new OneToOneLink('Position', this, linkedApis[0]),
      PARENT_POSITION: new OneToOneLink('ParentPosition', this, linkedApis[1]),
      POSITION_HIERARCHY_TYPE: new OneToOneLink(
        'PositionHierarchyType',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = PayIntV1HcmPositionHierarchies;

  requestBuilder(): PayIntV1HcmPositionHierarchiesRequestBuilder<DeSerializersT> {
    return new PayIntV1HcmPositionHierarchiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1HcmPositionHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1HcmPositionHierarchies<DeSerializersT>,
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
    typeof PayIntV1HcmPositionHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1HcmPositionHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      PayIntV1HcmPositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1HcmPositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1HcmPositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARENT_POSITION_ID: OrderableEdmTypeField<
      PayIntV1HcmPositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITION: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY_TYPE: OneToOneLink<
      PayIntV1HcmPositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionHierarchyTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1HcmPositionHierarchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parentPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ParentPositionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1HcmPositionHierarchies)
      };
    }

    return this._schema;
  }
}
