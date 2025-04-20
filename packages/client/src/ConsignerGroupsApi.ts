/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsignerGroups } from './ConsignerGroups';
import { ConsignerGroupsRequestBuilder } from './ConsignerGroupsRequestBuilder';
import { ConsignersV2Api } from './ConsignersV2Api';
import { ConsignersApi } from './ConsignersApi';
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
export class ConsignerGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConsignerGroups<DeSerializersT>, DeSerializersT>
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
  ): ConsignerGroupsApi<DeSerializersT> {
    return new ConsignerGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link consigners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNERS: OneToManyLink<
      ConsignerGroups<DeSerializersT>,
      DeSerializersT,
      ConsignersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consigner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNER: OneToManyLink<
      ConsignerGroups<DeSerializersT>,
      DeSerializersT,
      ConsignersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ConsignersV2Api<DeSerializersT>, ConsignersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONSIGNERS: new OneToManyLink('Consigners', this, linkedApis[0]),
      CONSIGNER: new OneToManyLink('Consigner', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ConsignerGroups;

  requestBuilder(): ConsignerGroupsRequestBuilder<DeSerializersT> {
    return new ConsignerGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConsignerGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConsignerGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ConsignerGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ConsignerGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsignerGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConsignerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNER_GROUP_ID: OrderableEdmTypeField<
      ConsignerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ConsignerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consigners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNERS: OneToManyLink<
      ConsignerGroups<DeSerializersT>,
      DeSerializersT,
      ConsignersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consigner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNER: OneToManyLink<
      ConsignerGroups<DeSerializersT>,
      DeSerializersT,
      ConsignersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConsignerGroups<DeSerializers>>;
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
         * Static representation of the {@link consignerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ConsignerGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsignerGroups)
      };
    }

    return this._schema;
  }
}
