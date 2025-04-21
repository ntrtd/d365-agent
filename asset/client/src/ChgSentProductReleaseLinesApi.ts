/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChgSentProductReleaseLines } from './ChgSentProductReleaseLines';
import { ChgSentProductReleaseLinesRequestBuilder } from './ChgSentProductReleaseLinesRequestBuilder';
import { SentProductReleaseHeadersApi } from './SentProductReleaseHeadersApi';
import { BillOfMaterialsLinesV3Api } from './BillOfMaterialsLinesV3Api';
import { RouteHeadersApi } from './RouteHeadersApi';
import { ProductReleaseProductDetailsApi } from './ProductReleaseProductDetailsApi';
import { EngChgReleaseStatus } from './EngChgReleaseStatus';
import { NoYes } from './NoYes';
import { EngChgReleaseTreeNodeType } from './EngChgReleaseTreeNodeType';
import { PmfProductType } from './PmfProductType';
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
export class ChgSentProductReleaseLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ChgSentProductReleaseLines<DeSerializersT>, DeSerializersT>
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
  ): ChgSentProductReleaseLinesApi<DeSerializersT> {
    return new ChgSentProductReleaseLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sentProductReleaseHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bomBillOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOM_BILL_OF_MATERIALS_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentSentProductReleaseLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_SENT_PRODUCT_RELEASE_LINE: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SentProductReleaseHeadersApi<DeSerializersT>,
      BillOfMaterialsLinesV3Api<DeSerializersT>,
      RouteHeadersApi<DeSerializersT>,
      ChgSentProductReleaseLinesApi<DeSerializersT>,
      ChgSentProductReleaseLinesApi<DeSerializersT>,
      ProductReleaseProductDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SENT_PRODUCT_RELEASE_HEADER: new OneToOneLink(
        'SentProductReleaseHeader',
        this,
        linkedApis[0]
      ),
      BOM_BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'BOMBillOfMaterialsHeader',
        this,
        linkedApis[1]
      ),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[2]),
      PARENT_SENT_PRODUCT_RELEASE_LINE: new OneToOneLink(
        'ParentSentProductReleaseLine',
        this,
        linkedApis[3]
      ),
      SENT_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'SentProductReleaseLines',
        this,
        linkedApis[4]
      ),
      PRODUCT_RELEASE_PRODUCT_DETAILS: new OneToOneLink(
        'ProductReleaseProductDetails',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ChgSentProductReleaseLines;

  requestBuilder(): ChgSentProductReleaseLinesRequestBuilder<DeSerializersT> {
    return new ChgSentProductReleaseLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChgSentProductReleaseLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ChgSentProductReleaseLines<DeSerializersT>,
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
    typeof ChgSentProductReleaseLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChgSentProductReleaseLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRODUCT_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASE_STATUS: EnumField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      EngChgReleaseStatus,
      true,
      true
    >;
    CO_BY_PRODUCT_LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HAS_SETUP_ERRORS: EnumField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PRODUCT_RELEASE_INCLUDE_LINE: EnumField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RELEASE_TREE_NODE_TYPE: EnumField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      EngChgReleaseTreeNodeType,
      true,
      true
    >;
    LINE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIALS_LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVE_ROUTE_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_BY_PRODUCT_TYPE: EnumField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    PARENT_LINE_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVE_BOM_ID: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PRODUCT_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_BY_PRODUCT_ITEM_NUMBER: OrderableEdmTypeField<
      ChgSentProductReleaseLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sentProductReleaseHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bomBillOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOM_BILL_OF_MATERIALS_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentSentProductReleaseLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_SENT_PRODUCT_RELEASE_LINE: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToOneLink<
      ChgSentProductReleaseLines<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ChgSentProductReleaseLines<DeSerializers>>;
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
         * Static representation of the {@link hasSetupErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_SETUP_ERRORS: fieldBuilder.buildEnumField(
          'HasSetupErrors',
          NoYes,
          true
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
         * Static representation of the {@link lineProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'LineProductVersionId',
          'Edm.String',
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
         * Static representation of the {@link activeRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ActiveRouteId',
          'Edm.String',
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
         * Static representation of the {@link parentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentLineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link lineProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineProductNumber',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChgSentProductReleaseLines)
      };
    }

    return this._schema;
  }
}
