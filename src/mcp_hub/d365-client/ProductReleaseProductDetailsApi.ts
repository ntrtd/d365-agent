/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductReleaseProductDetails } from './ProductReleaseProductDetails';
import { ProductReleaseProductDetailsRequestBuilder } from './ProductReleaseProductDetailsRequestBuilder';
import { ReceivedProductReleaseLinesApi } from './ReceivedProductReleaseLinesApi';
import { EngineeringProductVersionsApi } from './EngineeringProductVersionsApi';
import { ChgSentProductReleaseLinesApi } from './ChgSentProductReleaseLinesApi';
import { ReceivedProductReleaseLinesV2Api } from './ReceivedProductReleaseLinesV2Api';
import { NoYes } from './NoYes';
import { EngChgProductReleaseStatus } from './EngChgProductReleaseStatus';
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
export class ProductReleaseProductDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductReleaseProductDetails<DeSerializersT>, DeSerializersT>
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
  ): ProductReleaseProductDetailsApi<DeSerializersT> {
    return new ProductReleaseProductDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReceivedProductReleaseLinesApi<DeSerializersT>,
      EngineeringProductVersionsApi<DeSerializersT>,
      ChgSentProductReleaseLinesApi<DeSerializersT>,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECEIVED_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'ReceivedProductReleaseLines',
        this,
        linkedApis[0]
      ),
      ENGINEERING_PRODUCT_VERSION: new OneToOneLink(
        'EngineeringProductVersion',
        this,
        linkedApis[1]
      ),
      SENT_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'SentProductReleaseLines',
        this,
        linkedApis[2]
      ),
      RECEIVED_PRODUCT_RELEASE_LINES_V_2: new OneToManyLink(
        'ReceivedProductReleaseLinesV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ProductReleaseProductDetails;

  requestBuilder(): ProductReleaseProductDetailsRequestBuilder<DeSerializersT> {
    return new ProductReleaseProductDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductReleaseProductDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductReleaseProductDetails<DeSerializersT>,
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
    typeof ProductReleaseProductDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductReleaseProductDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE_BOM_ID: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_BILL_OF_MATERIALS_APPROVAL: EnumField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_RELEASE_ROUTE: EnumField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEMPLATE_ROUTE_ID: OrderableEdmTypeField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_STATUS: EnumField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      EngChgProductReleaseStatus,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_RELEASE_BILL_OF_MATERIALS: EnumField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_COPY_ROUTE_APPROVAL: EnumField<
      ProductReleaseProductDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION: OneToOneLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ProductReleaseProductDetails<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductReleaseProductDetails<DeSerializers>>;
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link templateBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_BOM_ID: fieldBuilder.buildEdmTypeField(
          'TemplateBOMId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'TemplateItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseCopyBillOfMaterialsApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_BILL_OF_MATERIALS_APPROVAL:
          fieldBuilder.buildEnumField(
            'WillProductReleaseCopyBillOfMaterialsApproval',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willProductReleaseReleaseRoute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_RELEASE_ROUTE: fieldBuilder.buildEnumField(
          'WillProductReleaseReleaseRoute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link templateRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_STATUS: fieldBuilder.buildEnumField(
          'ReleaseStatus',
          EngChgProductReleaseStatus,
          true
        ),
        /**
         * Static representation of the {@link willProductReleaseReleaseBillOfMaterials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_RELEASE_BILL_OF_MATERIALS:
          fieldBuilder.buildEnumField(
            'WillProductReleaseReleaseBillOfMaterials',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willProductReleaseCopyRouteApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_COPY_ROUTE_APPROVAL: fieldBuilder.buildEnumField(
          'WillProductReleaseCopyRouteApproval',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductReleaseProductDetails)
      };
    }

    return this._schema;
  }
}
