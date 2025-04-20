/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssWorkerManagerRelations } from './EssWorkerManagerRelations';
import { EssWorkerManagerRelationsRequestBuilder } from './EssWorkerManagerRelationsRequestBuilder';
import { EssWorkersApi } from './EssWorkersApi';
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
export class EssWorkerManagerRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EssWorkerManagerRelations<DeSerializersT>, DeSerializersT>
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
  ): EssWorkerManagerRelationsApi<DeSerializersT> {
    return new EssWorkerManagerRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link manager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER: OneToOneLink<
      EssWorkerManagerRelations<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EssWorkerManagerRelations<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EssWorkersApi<DeSerializersT>, EssWorkersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MANAGER: new OneToOneLink('Manager', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EssWorkerManagerRelations;

  requestBuilder(): EssWorkerManagerRelationsRequestBuilder<DeSerializersT> {
    return new EssWorkerManagerRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssWorkerManagerRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssWorkerManagerRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssWorkerManagerRelations<DeSerializersT>,
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
    typeof EssWorkerManagerRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssWorkerManagerRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssWorkerManagerRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssWorkerManagerRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link manager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER: OneToOneLink<
      EssWorkerManagerRelations<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EssWorkerManagerRelations<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssWorkerManagerRelations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link managerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManagerPersonnelNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssWorkerManagerRelations)
      };
    }

    return this._schema;
  }
}
