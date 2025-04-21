/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingLibraryTaskGroupings } from './OnboardingLibraryTaskGroupings';
import { OnboardingLibraryTaskGroupingsRequestBuilder } from './OnboardingLibraryTaskGroupingsRequestBuilder';
import { OnboardingLibraryTaskGroupsApi } from './OnboardingLibraryTaskGroupsApi';
import { OnboardingLibraryTasksApi } from './OnboardingLibraryTasksApi';
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
export class OnboardingLibraryTaskGroupingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardingLibraryTaskGroupings<DeSerializersT>, DeSerializersT>
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
  ): OnboardingLibraryTaskGroupingsApi<DeSerializersT> {
    return new OnboardingLibraryTaskGroupingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link libraryTaskGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK_GROUP: OneToOneLink<
      OnboardingLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTaskGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link libraryTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK: OneToOneLink<
      OnboardingLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardingLibraryTaskGroupsApi<DeSerializersT>,
      OnboardingLibraryTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LIBRARY_TASK_GROUP: new OneToOneLink(
        'LibraryTaskGroup',
        this,
        linkedApis[0]
      ),
      LIBRARY_TASK: new OneToOneLink('LibraryTask', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = OnboardingLibraryTaskGroupings;

  requestBuilder(): OnboardingLibraryTaskGroupingsRequestBuilder<DeSerializersT> {
    return new OnboardingLibraryTaskGroupingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardingLibraryTaskGroupings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingLibraryTaskGroupings<DeSerializersT>,
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
    typeof OnboardingLibraryTaskGroupings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingLibraryTaskGroupings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK_NAME: OrderableEdmTypeField<
      OnboardingLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_GROUP_NAME: OrderableEdmTypeField<
      OnboardingLibraryTaskGroupings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link libraryTaskGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK_GROUP: OneToOneLink<
      OnboardingLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTaskGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link libraryTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK: OneToOneLink<
      OnboardingLibraryTaskGroupings<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingLibraryTaskGroupings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link taskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_NAME: fieldBuilder.buildEdmTypeField(
          'TaskName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TaskGroupName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardingLibraryTaskGroupings)
      };
    }

    return this._schema;
  }
}
