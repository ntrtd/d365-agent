/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjValEmplProjSetupEntity_DataEntities } from './ProjValEmplProjSetupEntity_DataEntities';
import { ProjValEmplProjSetupEntity_DataEntitiesRequestBuilder } from './ProjValEmplProjSetupEntity_DataEntitiesRequestBuilder';
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
export class ProjValEmplProjSetupEntity_DataEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializersT>,
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
  ): ProjValEmplProjSetupEntity_DataEntitiesApi<DeSerializersT> {
    return new ProjValEmplProjSetupEntity_DataEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjValEmplProjSetupEntity_DataEntities;

  requestBuilder(): ProjValEmplProjSetupEntity_DataEntitiesRequestBuilder<DeSerializersT> {
    return new ProjValEmplProjSetupEntity_DataEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjValEmplProjSetupEntity_DataEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjValEmplProjSetupEntity_DataEntities<DeSerializersT>,
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
    typeof ProjValEmplProjSetupEntity_DataEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjValEmplProjSetupEntity_DataEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJID: OrderableEdmTypeField<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ProjValEmplProjSetupEntity_DataEntities<DeSerializers>
    >;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJID: fieldBuilder.buildEdmTypeField('Projid', 'Edm.String', false),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceLegalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ResourceLegalEntityDataArea',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjValEmplProjSetupEntity_DataEntities)
      };
    }

    return this._schema;
  }
}
