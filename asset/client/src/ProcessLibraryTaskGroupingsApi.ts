/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessLibraryTaskGroupings } from './ProcessLibraryTaskGroupings';
import { ProcessLibraryTaskGroupingsRequestBuilder } from './ProcessLibraryTaskGroupingsRequestBuilder';
import { BusinessProcessType } from './BusinessProcessType';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProcessLibraryTaskGroupingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcessLibraryTaskGroupings<DeSerializersT>, DeSerializersT>
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
  ): ProcessLibraryTaskGroupingsApi<DeSerializersT> {
    return new ProcessLibraryTaskGroupingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessLibraryTaskGroupings;

  requestBuilder(): ProcessLibraryTaskGroupingsRequestBuilder<DeSerializersT> {
    return new ProcessLibraryTaskGroupingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessLibraryTaskGroupings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessLibraryTaskGroupings<DeSerializersT>,
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
    typeof ProcessLibraryTaskGroupings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessLibraryTaskGroupings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIBRARY_TASK_PROCESS_TYPE: EnumField<
      ProcessLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    LIBRARY_TASK_NAME: OrderableEdmTypeField<
      ProcessLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIBRARY_TASK_GROUP_PROCESS_TYPE: EnumField<
      ProcessLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    LIBRARY_TASK_GROUP_NAME: OrderableEdmTypeField<
      ProcessLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProcessLibraryTaskGroupings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link libraryTaskProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'LibraryTask_ProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link libraryTaskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_NAME: fieldBuilder.buildEdmTypeField(
          'LibraryTask_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link libraryTaskGroupProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_GROUP_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'LibraryTaskGroup_ProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link libraryTaskGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'LibraryTaskGroup_Name',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessLibraryTaskGroupings)
      };
    }

    return this._schema;
  }
}
