/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectResources } from './ProjectResources';
import { ProjectResourcesRequestBuilder } from './ProjectResourcesRequestBuilder';
import { JournalTransApi } from './JournalTransApi';
import { ProjectRevenueSalesPricesApi } from './ProjectRevenueSalesPricesApi';
import { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { TransferPricesApi } from './TransferPricesApi';
import { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { WrkCtrType } from './WrkCtrType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectResources<DeSerializersT>, DeSerializersT>
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
  ): ProjectResourcesApi<DeSerializersT> {
    return new ProjectResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectRevenueSalesPrice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_REVENUE_SALES_PRICE: OneToManyLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectRevenueSalesPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPriceForResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE_FOR_RESOURCE: OneToManyLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTransApi<DeSerializersT>,
      ProjectRevenueSalesPricesApi<DeSerializersT>,
      ProjectEmplForecastsApi<DeSerializersT>,
      ProjectExpenseForecastsApi<DeSerializersT>,
      TransferPricesApi<DeSerializersT>,
      ProjectFeeForecastsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[0]),
      PROJECT_REVENUE_SALES_PRICE: new OneToManyLink(
        'ProjectRevenueSalesPrice',
        this,
        linkedApis[1]
      ),
      PROJECT_EMPL_FORECAST: new OneToOneLink(
        'ProjectEmplForecast',
        this,
        linkedApis[2]
      ),
      PROJECT_EXPENSE_FORECAST: new OneToOneLink(
        'ProjectExpenseForecast',
        this,
        linkedApis[3]
      ),
      TRANSFER_PRICE_FOR_RESOURCE: new OneToManyLink(
        'TransferPriceForResource',
        this,
        linkedApis[4]
      ),
      PROJECT_FEE_FORECAST: new OneToOneLink(
        'ProjectFeeForecast',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ProjectResources;

  requestBuilder(): ProjectResourcesRequestBuilder<DeSerializersT> {
    return new ProjectResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectResources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectResources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectResources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE_ID: OrderableEdmTypeField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ID: OrderableEdmTypeField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      ProjectResources<DeSerializers>,
      DeSerializersT,
      WrkCtrType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectRevenueSalesPrice} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_REVENUE_SALES_PRICE: OneToManyLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectRevenueSalesPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferPriceForResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_PRICE_FOR_RESOURCE: OneToManyLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      TransferPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToOneLink<
      ProjectResources<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link vendId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ID: fieldBuilder.buildEdmTypeField('VendId', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', WrkCtrType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectResources)
      };
    }

    return this._schema;
  }
}
