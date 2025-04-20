/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderHeaders } from './EngineeringChangeOrderHeaders';
import { EngineeringChangeOrderHeadersRequestBuilder } from './EngineeringChangeOrderHeadersRequestBuilder';
import { EngineeringChangeCategoriesV2Api } from './EngineeringChangeCategoriesV2Api';
import { WorkersApi } from './WorkersApi';
import { ProjectsV2Api } from './ProjectsV2Api';
import { EngineeringChangeSeveritiesApi } from './EngineeringChangeSeveritiesApi';
import { EngineeringChangeCategoriesApi } from './EngineeringChangeCategoriesApi';
import { EngineeringChangePrioritiesApi } from './EngineeringChangePrioritiesApi';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderDependenciesApi } from './EngineeringChangeOrderDependenciesApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeOrderHeadersApi<DeSerializersT> {
    return new EngineeringChangeOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCategoryV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CATEGORY_V_2: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCategoriesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEER_WORKER: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_V_2: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeveritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_RESPONSIBLE_WORKER: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CATEGORY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangePriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_PRIORITY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangePrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCIES: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeCategoriesV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ProjectsV2Api<DeSerializersT>,
      EngineeringChangeSeveritiesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EngineeringChangeCategoriesApi<DeSerializersT>,
      EngineeringChangePrioritiesApi<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_CATEGORY_V_2: new OneToOneLink(
        'EngineeringChangeCategoryV2',
        this,
        linkedApis[0]
      ),
      ENGINEER_WORKER: new OneToOneLink('EngineerWorker', this, linkedApis[1]),
      PROJECT_V_2: new OneToOneLink('ProjectV2', this, linkedApis[2]),
      ENGINEERING_CHANGE_SEVERITY: new OneToOneLink(
        'EngineeringChangeSeverity',
        this,
        linkedApis[3]
      ),
      ORDER_RESPONSIBLE_WORKER: new OneToOneLink(
        'OrderResponsibleWorker',
        this,
        linkedApis[4]
      ),
      ENGINEERING_CHANGE_CATEGORY: new OneToOneLink(
        'EngineeringChangeCategory',
        this,
        linkedApis[5]
      ),
      ENGINEERING_CHANGE_PRIORITY: new OneToOneLink(
        'EngineeringChangePriority',
        this,
        linkedApis[6]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: new OneToManyLink(
        'EngineeringChangeOrderProductsV3',
        this,
        linkedApis[7]
      ),
      ENGINEERING_CHANGE_ORDER_DEPENDENCIES: new OneToManyLink(
        'EngineeringChangeOrderDependencies',
        this,
        linkedApis[8]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductsV2',
        this,
        linkedApis[9]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProducts',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderHeaders;

  requestBuilder(): EngineeringChangeOrderHeadersRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderHeaders<DeSerializersT>,
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
    typeof EngineeringChangeOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TITLE: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_PRIORITY_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_SEVERITY_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCategoryV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CATEGORY_V_2: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCategoriesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEER_WORKER: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_V_2: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeSeverity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_SEVERITY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeSeveritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderResponsibleWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_RESPONSIBLE_WORKER: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CATEGORY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangePriority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_PRIORITY: OneToOneLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangePrioritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_3: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderDependencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_DEPENDENCIES: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderDependenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS_V_2: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TITLE: fieldBuilder.buildEdmTypeField(
          'OrderTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link engineeringChangePriorityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_PRIORITY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringChangePriorityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeSeverityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_SEVERITY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeSeverityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLegalEntityId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeOrderHeaders)
      };
    }

    return this._schema;
  }
}
