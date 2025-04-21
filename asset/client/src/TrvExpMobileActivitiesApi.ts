/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrvExpMobileActivities } from './TrvExpMobileActivities';
import { TrvExpMobileActivitiesRequestBuilder } from './TrvExpMobileActivitiesRequestBuilder';
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
export class TrvExpMobileActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TrvExpMobileActivities<DeSerializersT>, DeSerializersT>
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
  ): TrvExpMobileActivitiesApi<DeSerializersT> {
    return new TrvExpMobileActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrvExpMobileActivities;

  requestBuilder(): TrvExpMobileActivitiesRequestBuilder<DeSerializersT> {
    return new TrvExpMobileActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrvExpMobileActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrvExpMobileActivities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrvExpMobileActivities<DeSerializersT>,
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
    typeof TrvExpMobileActivities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrvExpMobileActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TrvExpMobileActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      TrvExpMobileActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      TrvExpMobileActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TrvExpMobileActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_ID: OrderableEdmTypeField<
      TrvExpMobileActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrvExpMobileActivities<DeSerializers>>;
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link hierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'HierarchyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrvExpMobileActivities)
      };
    }

    return this._schema;
  }
}
