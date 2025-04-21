/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceRoleCharacteristicsEntities } from './ResourceRoleCharacteristicsEntities';
import { ResourceRoleCharacteristicsEntitiesRequestBuilder } from './ResourceRoleCharacteristicsEntitiesRequestBuilder';
import { ResCharacteristicSetEnum } from './ResCharacteristicSetEnum';
import { ResCharacteristicReqEntityType } from './ResCharacteristicReqEntityType';
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
export class ResourceRoleCharacteristicsEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ResourceRoleCharacteristicsEntities<DeSerializersT>,
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
  ): ResourceRoleCharacteristicsEntitiesApi<DeSerializersT> {
    return new ResourceRoleCharacteristicsEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ResourceRoleCharacteristicsEntities;

  requestBuilder(): ResourceRoleCharacteristicsEntitiesRequestBuilder<DeSerializersT> {
    return new ResourceRoleCharacteristicsEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ResourceRoleCharacteristicsEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ResourceRoleCharacteristicsEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ResourceRoleCharacteristicsEntities<DeSerializersT>,
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
    typeof ResourceRoleCharacteristicsEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ResourceRoleCharacteristicsEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ResourceRoleCharacteristicsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARACTERISTIC_ID: OrderableEdmTypeField<
      ResourceRoleCharacteristicsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARACTERISTIC_SET: EnumField<
      ResourceRoleCharacteristicsEntities<DeSerializers>,
      DeSerializersT,
      ResCharacteristicSetEnum,
      true,
      true
    >;
    ROLE_ID: OrderableEdmTypeField<
      ResourceRoleCharacteristicsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQ_ENTITY_TYPE: EnumField<
      ResourceRoleCharacteristicsEntities<DeSerializers>,
      DeSerializersT,
      ResCharacteristicReqEntityType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ResourceRoleCharacteristicsEntities<DeSerializers>>;
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
         * Static representation of the {@link characteristicId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTERISTIC_ID: fieldBuilder.buildEdmTypeField(
          'CharacteristicId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link characteristicSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTERISTIC_SET: fieldBuilder.buildEnumField(
          'CharacteristicSet',
          ResCharacteristicSetEnum,
          true
        ),
        /**
         * Static representation of the {@link roleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_ID: fieldBuilder.buildEdmTypeField('RoleId', 'Edm.String', false),
        /**
         * Static representation of the {@link reqEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_ENTITY_TYPE: fieldBuilder.buildEnumField(
          'ReqEntityType',
          ResCharacteristicReqEntityType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceRoleCharacteristicsEntities)
      };
    }

    return this._schema;
  }
}
