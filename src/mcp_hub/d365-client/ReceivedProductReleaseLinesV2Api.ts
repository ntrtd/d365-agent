/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReceivedProductReleaseLinesV2 } from './ReceivedProductReleaseLinesV2';
import { ReceivedProductReleaseLinesV2RequestBuilder } from './ReceivedProductReleaseLinesV2RequestBuilder';
import { ReceivedProductReleaseHeadersApi } from './ReceivedProductReleaseHeadersApi';
import { ProductReleaseProductDetailsApi } from './ProductReleaseProductDetailsApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { EngChgReleaseTreeNodeType } from './EngChgReleaseTreeNodeType';
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
export class ReceivedProductReleaseLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReceivedProductReleaseLinesV2<DeSerializersT>, DeSerializersT>
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
  ): ReceivedProductReleaseLinesV2Api<DeSerializersT> {
    return new ReceivedProductReleaseLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link receivedProductReleaseHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_HEADER: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentReceivedProductReleaseLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_RECEIVED_PRODUCT_RELEASE_LINE: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReceivedProductReleaseHeadersApi<DeSerializersT>,
      ProductReleaseProductDetailsApi<DeSerializersT>,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECEIVED_PRODUCT_RELEASE_HEADER: new OneToOneLink(
        'ReceivedProductReleaseHeader',
        this,
        linkedApis[0]
      ),
      PRODUCT_RELEASE_PRODUCT_DETAILS: new OneToOneLink(
        'ProductReleaseProductDetails',
        this,
        linkedApis[1]
      ),
      PARENT_RECEIVED_PRODUCT_RELEASE_LINE: new OneToOneLink(
        'ParentReceivedProductReleaseLine',
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

  entityConstructor = ReceivedProductReleaseLinesV2;

  requestBuilder(): ReceivedProductReleaseLinesV2RequestBuilder<DeSerializersT> {
    return new ReceivedProductReleaseLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReceivedProductReleaseLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReceivedProductReleaseLinesV2<DeSerializersT>,
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
    typeof ReceivedProductReleaseLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReceivedProductReleaseLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRODUCT_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASE_STATUS: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      EngChgReleaseStatus,
      true,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    BILL_OF_MATERIALS_LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CO_BY_PRODUCT_LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CO_BY_PRODUCT_ITEM_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_SETUP_ERRORS: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_PRODUCT_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_BOM_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_LINE_NUMBER: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_PRODUCT_RELEASE_INCLUDE_LINE: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RELEASE_TREE_NODE_TYPE: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      EngChgReleaseTreeNodeType,
      true,
      true
    >;
    CO_BY_PRODUCT_TYPE: EnumField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    ACTIVE_ROUTE_ID: OrderableEdmTypeField<
      ReceivedProductReleaseLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivedProductReleaseHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_HEADER: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentReceivedProductReleaseLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_RECEIVED_PRODUCT_RELEASE_LINE: OneToOneLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES_V_2: OneToManyLink<
      ReceivedProductReleaseLinesV2<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReceivedProductReleaseLinesV2<DeSerializers>>;
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
         * Static representation of the {@link headerProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link headerProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'HeaderProductVersionId',
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
         * Static representation of the {@link releasingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'ReleasingLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link releaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_STATUS: fieldBuilder.buildEnumField(
          'ReleaseStatus',
          EngChgReleaseStatus,
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
         * Static representation of the {@link billOfMaterialsLineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIALS_LINE_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'BillOfMaterialsLineCreationSequenceNumber',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link coByProductLineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_BY_PRODUCT_LINE_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'CoByProductLineCreationSequenceNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link coByProductItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_BY_PRODUCT_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'CoByProductItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'LineProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasSetupErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_SETUP_ERRORS: fieldBuilder.buildEnumField(
          'HasSetupErrors',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_BOM_ID: fieldBuilder.buildEdmTypeField(
          'ActiveBOMId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willProductReleaseIncludeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RELEASE_INCLUDE_LINE: fieldBuilder.buildEnumField(
          'WillProductReleaseIncludeLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link releaseTreeNodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_TREE_NODE_TYPE: fieldBuilder.buildEnumField(
          'ReleaseTreeNodeType',
          EngChgReleaseTreeNodeType,
          true
        ),
        /**
         * Static representation of the {@link coByProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_BY_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'CoByProductType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link activeRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ActiveRouteId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReceivedProductReleaseLinesV2)
      };
    }

    return this._schema;
  }
}
