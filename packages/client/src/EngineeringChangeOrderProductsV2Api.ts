/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductsV2 } from './EngineeringChangeOrderProductsV2';
import { EngineeringChangeOrderProductsV2RequestBuilder } from './EngineeringChangeOrderProductsV2RequestBuilder';
import { EngineeringChangeOrderProductAttributesApi } from './EngineeringChangeOrderProductAttributesApi';
import { EngineeringChangeOrderProductFormulaHeadersApi } from './EngineeringChangeOrderProductFormulaHeadersApi';
import { ProductOwnersApi } from './ProductOwnersApi';
import { EngineeringChangeCustomerApprovalTypesApi } from './EngineeringChangeCustomerApprovalTypesApi';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { EngineeringChangeReasonsApi } from './EngineeringChangeReasonsApi';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
import { EngineeringChangeOrderProductWhereUsedAnalysesApi } from './EngineeringChangeOrderProductWhereUsedAnalysesApi';
import { EngineeringChangeOrderProductDocumentsApi } from './EngineeringChangeOrderProductDocumentsApi';
import { EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api } from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api';
import { EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi } from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi';
import { EngineeringChangeOrderProductRouteHeadersV2Api } from './EngineeringChangeOrderProductRouteHeadersV2Api';
import { PmfProductType } from './PmfProductType';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeOrderProductsV2<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeOrderProductsV2Api<DeSerializersT> {
    return new EngineeringChangeOrderProductsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADERS: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCustomerApprovalType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CUSTOMER_APPROVAL_TYPE: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCustomerApprovalTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REASON: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADER: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductWhereUsedAnalyses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_DOCUMENTS: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductBillOfMaterialsHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADERS_V_2: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ENVIRONMENTAL_HEALTH_AND_SAFETY_CODES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADERS_V_2: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>,
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>,
      ProductOwnersApi<DeSerializersT>,
      EngineeringChangeCustomerApprovalTypesApi<DeSerializersT>,
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      EngineeringChangeReasonsApi<DeSerializersT>,
      ProductLifecycleStatesApi<DeSerializersT>,
      EngineeringChangeOrderHeadersApi<DeSerializersT>,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>,
      EngineeringChangeOrderProductDocumentsApi<DeSerializersT>,
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api<DeSerializersT>,
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<DeSerializersT>,
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: new OneToManyLink(
        'EngineeringChangeOrderProductAttributes',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADERS: new OneToManyLink(
        'EngineeringChangeOrderProductFormulaHeaders',
        this,
        linkedApis[1]
      ),
      PRODUCT_OWNER: new OneToOneLink('ProductOwner', this, linkedApis[2]),
      ENGINEERING_CHANGE_CUSTOMER_APPROVAL_TYPE: new OneToOneLink(
        'EngineeringChangeCustomerApprovalType',
        this,
        linkedApis[3]
      ),
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToOneLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[4]
      ),
      ENGINEERING_CHANGE_REASON: new OneToOneLink(
        'EngineeringChangeReason',
        this,
        linkedApis[5]
      ),
      PRODUCT_LIFECYCLE_STATE: new OneToOneLink(
        'ProductLifecycleState',
        this,
        linkedApis[6]
      ),
      ENGINEERING_CHANGE_ORDER_HEADER: new OneToOneLink(
        'EngineeringChangeOrderHeader',
        this,
        linkedApis[7]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: new OneToManyLink(
        'EngineeringChangeOrderProductWhereUsedAnalyses',
        this,
        linkedApis[8]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_DOCUMENTS: new OneToManyLink(
        'EngineeringChangeOrderProductDocuments',
        this,
        linkedApis[9]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADERS_V_2:
        new OneToManyLink(
          'EngineeringChangeOrderProductBillOfMaterialsHeadersV2',
          this,
          linkedApis[10]
        ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ENVIRONMENTAL_HEALTH_AND_SAFETY_CODES:
        new OneToManyLink(
          'EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes',
          this,
          linkedApis[11]
        ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADERS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductRouteHeadersV2',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductsV2;

  requestBuilder(): EngineeringChangeOrderProductsV2RequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductsV2<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_PRODUCT_CATEGORY_DETAILS_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_CUSTOMER_APPROVAL_TYPE_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARE_PRODUCT_WEIGHT: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_TO_DATE: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHELF_ADVICE_PERIOD_DAYS: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POTENCY_BASE_ATTRIBUTE: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_DISPOSAL_CODE: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: EnumField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      PdsPotencyAttribRecordingEnum,
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_PRODUCT_HEIGHT: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CUSTOMER_APPROVAL_REQUIRED: EnumField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENGINEERING_CHANGE_REASON_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_LIFE_PERIOD_DAYS: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_UNIT_SYMBOL: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENVIRONMENTAL_HEALTH_AND_SAFETY_APPLICABLE: EnumField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRED_SPECIAL_TOOLING_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_OWNER_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANGE_DESCRIPTION: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEST_BEFORE_PERIOD_DAYS: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROSS_DEPTH: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_FROM_DATE: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENT_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRODUCT_WEIGHT: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_PRODUCT_WIDTH: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ATTRIBUTES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADERS: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_OWNER: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeCustomerApprovalType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_CUSTOMER_APPROVAL_TYPE: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeCustomerApprovalTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_REASON: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADER: OneToOneLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductWhereUsedAnalyses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_WHERE_USED_ANALYSES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_DOCUMENTS: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductBillOfMaterialsHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADERS_V_2: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ENVIRONMENTAL_HEALTH_AND_SAFETY_CODES: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADERS_V_2: OneToManyLink<
      EngineeringChangeOrderProductsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeOrderProductsV2<DeSerializers>>;
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'NewProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionWidthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionWidthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link engineeringProductCategoryDetailsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_CATEGORY_DETAILS_NAME:
          fieldBuilder.buildEdmTypeField(
            'EngineeringProductCategoryDetailsName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link currentItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'CurrentItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'NewItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeCustomerApprovalTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_CUSTOMER_APPROVAL_TYPE_NAME:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeCustomerApprovalTypeName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link currentProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'CurrentProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tareProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARE_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TareProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'CurrentProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shelfAdvicePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_ADVICE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfAdvicePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link potencyBaseAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENCY_BASE_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'PotencyBaseAttribute',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionDensityConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDensityConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link currentProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'CurrentProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialDisposalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DISPOSAL_CODE: fieldBuilder.buildEdmTypeField(
          'MaterialDisposalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_TYPE: fieldBuilder.buildEnumField(
          'ProductionType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link potencyBaseAttributeValueEntryEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENCY_BASE_ATTRIBUTE_VALUE_ENTRY_EVENT: fieldBuilder.buildEnumField(
          'PotencyBaseAttributeValueEntryEvent',
          PdsPotencyAttribRecordingEnum,
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCustomerApprovalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_APPROVAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsCustomerApprovalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeReasonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_REASON_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeReasonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'NewProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shelfLifePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'ShelfLifePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productionConsumptionHeightConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionHeightConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link newProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'NewProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BOMUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEnvironmentalHealthAndSafetyApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENVIRONMENTAL_HEALTH_AND_SAFETY_APPLICABLE:
          fieldBuilder.buildEnumField(
            'IsEnvironmentalHealthAndSafetyApplicable',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link requiredSpecialToolingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_SPECIAL_TOOLING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RequiredSpecialToolingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'CurrentProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'ProductOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link changeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ChangeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bestBeforePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEST_BEFORE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'BestBeforePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link grossDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effectiveFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currentProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'CurrentProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netProductWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRODUCT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetProductWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionConsumptionDepthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDepthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link grossProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'GrossProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'NewProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'NewProductColorId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeOrderProductsV2)
      };
    }

    return this._schema;
  }
}
