/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjValProjCategorySetUpEntitiesV2 } from './ProjValProjCategorySetUpEntitiesV2';
import { ProjValProjCategorySetUpEntitiesV2RequestBuilder } from './ProjValProjCategorySetUpEntitiesV2RequestBuilder';
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
export class ProjValProjCategorySetUpEntitiesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjValProjCategorySetUpEntitiesV2<DeSerializersT>,
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
  ): ProjValProjCategorySetUpEntitiesV2Api<DeSerializersT> {
    return new ProjValProjCategorySetUpEntitiesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjValProjCategorySetUpEntitiesV2;

  requestBuilder(): ProjValProjCategorySetUpEntitiesV2RequestBuilder<DeSerializersT> {
    return new ProjValProjCategorySetUpEntitiesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjValProjCategorySetUpEntitiesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjValProjCategorySetUpEntitiesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjValProjCategorySetUpEntitiesV2<DeSerializersT>,
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
    typeof ProjValProjCategorySetUpEntitiesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjValProjCategorySetUpEntitiesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjValProjCategorySetUpEntitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      ProjValProjCategorySetUpEntitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjValProjCategorySetUpEntitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      ProjValProjCategorySetUpEntitiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProjValProjCategorySetUpEntitiesV2<DeSerializers>>;
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', false),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjValProjCategorySetUpEntitiesV2)
      };
    }

    return this._schema;
  }
}
