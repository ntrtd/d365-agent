/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeRequestDependencyActions } from './EngineeringChangeRequestDependencyActions';
import { EngineeringChangeRequestDependencyActionsRequestBuilder } from './EngineeringChangeRequestDependencyActionsRequestBuilder';
import { EngineeringChangeRequestDependenciesApi } from './EngineeringChangeRequestDependenciesApi';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeRequestDependencyActionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
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
  ): EngineeringChangeRequestDependencyActionsApi<DeSerializersT> {
    return new EngineeringChangeRequestDependencyActionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestDependency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCY: OneToOneLink<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSOR_WORKER: OneToOneLink<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeRequestDependenciesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_REQUEST_DEPENDENCY: new OneToOneLink(
        'EngineeringChangeRequestDependency',
        this,
        linkedApis[0]
      ),
      PROCESSOR_WORKER: new OneToOneLink('ProcessorWorker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EngineeringChangeRequestDependencyActions;

  requestBuilder(): EngineeringChangeRequestDependencyActionsRequestBuilder<DeSerializersT> {
    return new EngineeringChangeRequestDependencyActionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeRequestDependencyActions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeRequestDependencyActions<DeSerializersT>,
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
    typeof EngineeringChangeRequestDependencyActions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeRequestDependencyActions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACTION_CLASS_NAME: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENT_PRODUCT_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENCY_TRANSACTION_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_REQUEST_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PROCESSABLE_ACTION: EnumField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCESSOR_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_NAME: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSED_DATE_TIME: OrderableEdmTypeField<
      EngineeringChangeRequestDependencyActions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeRequestDependency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REQUEST_DEPENDENCY: OneToOneLink<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeRequestDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processorWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSOR_WORKER: OneToOneLink<
      EngineeringChangeRequestDependencyActions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeRequestDependencyActions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link actionClassName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_CLASS_NAME: fieldBuilder.buildEdmTypeField(
          'ActionClassName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependentProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DependentProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependencyLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENCY_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'DependencyLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependencyTransactionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENCY_TRANSACTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DependencyTransactionDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeRequestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_REQUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeRequestNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isProcessableAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCESSABLE_ACTION: fieldBuilder.buildEnumField(
          'IsProcessableAction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link processorPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSOR_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessorPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_NAME: fieldBuilder.buildEdmTypeField(
          'ActionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ProcessedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeRequestDependencyActions
        )
      };
    }

    return this._schema;
  }
}
